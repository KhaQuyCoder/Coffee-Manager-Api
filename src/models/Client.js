const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    Address: {
      type: String,
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
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
