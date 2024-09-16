const mongoose = require("mongoose");

const basicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please fill a valid contact number"],
  },
});

const Basic = mongoose.model("Basic", basicSchema);

module.exports = Basic;
