var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: {
    type: String,
    required: "E' necessario inserire un titolo per questo post",
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
    required: "E' necessario inserire un corpo per questo post",
  }  
});

module.exports = mongoose.model("Blog", BlogSchema);