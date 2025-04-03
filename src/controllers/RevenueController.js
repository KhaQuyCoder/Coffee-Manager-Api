const Revenue = require("../models/Revunue");
const RevenueController = {
  makeRevenue: async (req, res) => {
    // thêm 1 bảng doanh thu
    try {
      const newRevenue = new Revenue({});
      const revenue = await newRevenue.save();
      res.status(200).json(revenue);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  findRevenue: async (req, res) => {
    // lấy doanh thu ngày trong tháng
    try {
      const { year } = req.params;
      const revenue = await Revenue.findOne({ year: year });
      if (!revenue) return res.json({ message: "không tìm thấy ngày này" });

      res.status(200).json(revenue);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  addRevenueDay: async (req, res) => {
    try {
      const { revenueDay, revenueMonth, revenueYear } = req.body;
      const { year } = req.params;
      const revenue = await Revenue.findOne({ year: year });
      if (!revenue) return res.json({ message: "Không tìm thấy năm" });
      const updateRevenueDay = revenue.revenueDay.find(
        (r) => r.day == revenueDay.day
      );
      const updateRevenueMonth = revenue.revenueMonth.find(
        (r) => r.month == revenueMonth.month
      );
      const updateRevenueYear = revenue.revenueYear.find(
        (r) => r.year == revenueYear.year
      );
      if (updateRevenueDay) {
        updateRevenueDay.revenue += revenueDay.revenue;
      } else {
        revenue.revenueDay.push(revenueDay);
      }
      if (updateRevenueMonth) {
        updateRevenueMonth.revenue += revenueMonth.revenue;
      } else {
        revenue.revenueMonth.push(revenueMonth);
      }
      if (updateRevenueYear) {
        updateRevenueYear.revenue += revenueYear.revenue;
      } else {
        revenue.revenueYear.push(revenueYear);
      }
      await revenue.save();
      res.status(200).json(revenue);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};
module.exports = RevenueController;
