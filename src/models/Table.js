const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    NumberTable: {
      type: Number,
      required: true,
      unique: true,
    },
    CurrentOrder: {
      type: {
        total_price: {
          type: Number,
          default: 0,
        },
        items: {
          type: [
            {
              name: { type: String, required: true },
              quantity: { type: Number, required: true },
              price: { type: Number, required: true },
            },
          ],
          default: [],
        },
      },
    },
    State: {
      type: Boolean,
    },
    DateCreate: {
      type: Date,
      default: "",
    },
  },
  { timestamps: true }
);

const Table = mongoose.model("Table", TableSchema);
module.exports = Table;
