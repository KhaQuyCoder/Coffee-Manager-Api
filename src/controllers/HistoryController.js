const History = require("../models/History");
const HistoryController = {
  // add 1 history
  AddOneHistory: async (req, res) => {
    try {
      const newHistory = new History({
        id: req.body.id,
        numberTable: req.body.numberTable,
        sumMoney: req.body.sumMoney,
        time: req.body.time,
        staff: req.body.staff,
      });
      if (!newHistory) return res.json({ message: "data khong chinh xac" });
      const history = await newHistory.save();
      return res.status(200).json(history);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  getAllHistory: async (req, res) => {
    try {
      const history = await History.find();
      if (!history) return res.json({ message: "data rong" });
      return res.status(200).json(history);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};
module.exports = HistoryController;
