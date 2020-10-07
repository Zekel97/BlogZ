var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var loginsModel = new Schema({
  usrnm: {
    type: String,
    required: "Username dude",
  },
  passwrd: {
    type: String,
    required: "Password dummy",
  }  
});

module.exports = mongoose.model("Credentials", loginsModel);