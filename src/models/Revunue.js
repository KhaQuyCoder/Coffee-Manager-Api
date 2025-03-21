const mongoose = require("mongoose");

const RevenueSchema = new mongoose.Schema(
  {
    revenueDay: {
      type: [
        {
          day: {
            type: String,
          },
          revenue: {
            type: Number,
          },
        },
      ],
      default: [],
    },
    revenueWeek: {
      type: [
        {
          week: {
            type: String,
          },
          revenue: {
            type: Number,
          },
        },
      ],
      default: [],
    },
    revenueMonth: {
      type: [
        {
          month: {
            type: String,
          },
          revenue: {
            type: Number,
          },
        },
      ],
      default: [],
    },
    revenueYear: {
      type: [
        {
          year: {
            type: String,
          },
          revenue: {
            type: Number,
          },
        },
      ],
      default: [],
    },
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
  },
  { timestamps: true }
);
const Revenue = mongoose.model("Revenue", RevenueSchema);
module.exports = Revenue;
