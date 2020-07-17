const mongoose = require("mongoose");
const User = require("../models/User");
require("../models/Studio");

const Studio = mongoose.model("studios");

const studio = {
  addStudio: async (req, res) => {
    const newStudioData = {
      name: req.body.name,
      _artists: req.body._artists,
      _addedBy: req.body._addedBy,
    };

    try {
      const newStudio = await new Studio(newStudioData).save((err, studio) => {
        res.send(studio);
      });

      console.log("Studio saved:", newStudio);
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
  getAllStudios: (req, res) => {
    Studio.find({})
      .then((results) => res.send(results))
      .catch((err) => res.status(404));
  },
  getSingleStudio: (req, res) => {
    Studio.findOne({ slug: req.params.slug })
      .then((result) => {
        if (!result) {
          res.status(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => res.status(404));
  },
  updateStudio: (req, res) => {
    const updatedStudioData = {
      name: req.body.name,
      _artists: req.body._artists,
      _addedBy: req.body._addedBy,
    };
    Studio.findOneAndUpdate({ slug: req.params.slug }, updatedStudioData)
      .then((updatedStudio) => res.send(updatedStudio))
      .catch((err) => res.status(404));
  },
  deleteStudio: (req, res) => {
    Studio.findByOneAndDelete({ slug: req.params.slug })
      .then((result) => {
        if (!result) {
          res.status(404);
        } else {
          res.status(200);
        }
      })
      .catch((err) => res.status(500));
  },
};

module.exports = studio;
