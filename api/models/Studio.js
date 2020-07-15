const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URLSlugs = require("mongoose-url-slugs");

const StudioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    _artists: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],

    _addedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

StudioSchema.plugin(URLSlugs("name", { field: "slug", update: true }));

module.exports = mongoose.model("studios", StudioSchema);
