const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      default: "Nhân viên",
    },
    Staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: "",
    },
    permisstions: {
      type: [],
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
