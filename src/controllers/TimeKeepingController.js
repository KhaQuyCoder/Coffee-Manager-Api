const TimeKeeping = require("../models/TimeKeeping");

const TimeKeepingController = {
  makeWorkDays: async (req, res) => {
    try {
      const { DayWorks, idStaff } = req.body;
      const currentMonth = new Date().toLocaleString("en-US", {
        month: "long",
      });

      const curentDay = DayWorks.months[currentMonth].days;
      let TableTimeKeeping = await TimeKeeping.findOne({ idStaff });
      if (!TableTimeKeeping) {
        TableTimeKeeping = new TimeKeeping({
          DayWorks: {
            months: {
              [currentMonth]: {
                days: [curentDay],
                total: 1,
              },
            },
          },
          idStaff: idStaff,
        });

        await TableTimeKeeping.save();
        return res.status(200).json(TableTimeKeeping);
      }

      const monthData = TableTimeKeeping.DayWorks.months[currentMonth];

      if (monthData.days.includes(curentDay)) {
        monthData.days = monthData.days.filter((d) => d !== curentDay);
      } else {
        monthData.days.push(curentDay);
      }

      monthData.total = monthData.days.length;

      await TableTimeKeeping.save();
      return res.status(200).json(TableTimeKeeping);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Lỗi khi cập nhật chấm công", details: error });
    }
  },

  getAllTimeKeeping: async (req, res) => {
    try {
      const workDay = await TimeKeeping.find().populate("idStaff");
      if (!workDay) return res.json({ message: "Không tìm bảng công" });

      res.status(200).json(workDay);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = TimeKeepingController;
