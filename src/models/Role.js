const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    Permissions: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
