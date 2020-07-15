const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      min: 5,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    _studio: {
      type: Schema.Types.ObjectId,
      ref: "studios",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
