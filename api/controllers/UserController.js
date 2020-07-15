const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");

const user = {
  userLogin: (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.sendStatus(403);
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.send(user);
      });
    })(req, res, next);
  },
  userLogout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },
  userRegister: async (req, res) => {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.sendStatus(400).send(err);
    }
  },
};

module.exports = user;
