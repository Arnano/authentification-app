const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

// Define the model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On save hook encrypt the password
// Run this function before the user gets saved
userSchema.pre("save", function(next) {
  const user = this;
  // generate a slat then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // Hash/encrypt the password using the salt then run the callback
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash; // overwrite plain text password with encrypted one
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  const user = this;

  bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
    if(err) return callback(err);
    callback(null, isMatch);
  });
}

// Create the model class
const ModelClass = mongoose.model("user", userSchema);

module.exports = ModelClass;
