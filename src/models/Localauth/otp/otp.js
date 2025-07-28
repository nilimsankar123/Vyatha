const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
});

const OTPModel = mongoose.model("OTPsignup", otpSchema);
module.exports = {
  OTPModel,
};
