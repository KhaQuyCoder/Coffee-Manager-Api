const mongoose = require("mongoose");
const HistorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    numberTable: {
      type: Number,
      required: true,
    },
    sumMoney: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    staff: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const History = mongoose.model("History", HistorySchema);
module.exports = History;
