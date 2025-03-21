const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
    },
    Address: {
      type: String,
    },
    Permissions: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
    },
    Birth: {
      type: Date,
    },
    Gender: {
      type: Boolean,
    },
    DateWork: {
      type: Date,
    },
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    grantPermisstion: {
      type: [],
      default: [],
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", StaffSchema);
module.exports = Staff;
