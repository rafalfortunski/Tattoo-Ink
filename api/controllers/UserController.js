const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

require("../models/User");
const User = mongoose.model("users");

const bcrypt = require("bcryptjs");

const user = {
  userLogin: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not found.");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("Invalid password.");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send({ token, user });
  },

  userLogout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },

  userRegister: async (req, res) => {
    // const emailExist = await User.findOne({ email: req.body.email });
    // if (emailExist) return res.status(400).send("Email already exists.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  userAuth: async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access Denied");

    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send("Invalid Token");
    }
  },
};

module.exports = user;
