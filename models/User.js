const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Enter a username",
  },
  password: {
    type: String,
    required: "Enter a password",
  },
  favorites: {
    type: String,
    trim: true,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
