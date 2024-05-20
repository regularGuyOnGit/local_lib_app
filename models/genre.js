const mongoose = require("mongoose");
const { Schema } = mongoose;

const genreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100, require: true },
});

genreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});
module.exports = mongoose.model("Genre", genreSchema);
