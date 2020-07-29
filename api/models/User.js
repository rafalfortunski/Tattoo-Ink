const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      min: 5,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      min: 5,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
    },
    avatar: {
      type: String,
      default:
        "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=6&m=846183008&s=170667a&w=0&h=bCKJRIR5IBFOv80Rd8HfBVj_VirFxgWuZIDJcg9OK9M=",
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
