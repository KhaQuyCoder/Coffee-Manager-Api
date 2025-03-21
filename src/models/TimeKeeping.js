const mongoose = require("mongoose");

const MonthSchema = new mongoose.Schema({
  total: {
    type: Number,
    default: 0,
  },
  days: {
    type: [String],
    default: [],
  },
});

const TimeKeepingSchema = new mongoose.Schema(
  {
    DayWorks: {
      months: {
        January: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        February: {
          type: MonthSchema,
          default: () => ({ total: 0, days: [] }),
        },
        March: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        April: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        May: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        June: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        July: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        August: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        September: {
          type: MonthSchema,
          default: () => ({ total: 0, days: [] }),
        },
        October: { type: MonthSchema, default: () => ({ total: 0, days: [] }) },
        November: {
          type: MonthSchema,
          default: () => ({ total: 0, days: [] }),
        },
        December: {
          type: MonthSchema,
          default: () => ({ total: 0, days: [] }),
        },
      },
    },
    idStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
  },
  { timestamps: true }
);

const TimeKeeping = mongoose.model("TimeKeeping", TimeKeepingSchema);
module.exports = TimeKeeping;
