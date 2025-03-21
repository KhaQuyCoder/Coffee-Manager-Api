const Staff = require("../models/Staff");

const StaffController = {
  addAStaff: async (req, res) => {
    try {
      const newStaff = new Staff({
        Name: req.body.Name,
        Age: req.body.Age,
        Address: req.body.Address,
        Permissions: req.body.Permissions,
        Phone: req.body.Phone,
        Birth: req.body.Birth,
        Gender: req.body.Gender,
        DateWork: req.body.DateWork,
        User: req.body.User,
      });
      if (!newStaff) return res.json({ message: "Thong tin khong chinh xac" });
      const client = await newStaff.save();
      res.status(200).json(client);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  getAllStaff: async (req, res) => {
    try {
      const staff = await Staff.find().populate("User");
      if (!staff) return res.json({ message: "Không có nhân viên nào cả" });
      res.status(200).json(staff);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  delAStaff: async (req, res) => {
    try {
      const { id } = req.params;
      const staff = await Staff.findByIdAndDelete({ _id: id });
      if (!staff) return res.json({ message: "Không tồn tại nhân viên" });
      res.status(200).json(staff);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  getAStaff: async (req, res) => {
    try {
      const { id } = req.params;
      const staff = await Staff.findById({ _id: id });
      if (!staff) return res.json({ message: "Ko tim thay nhan vien" });
      res.status(200).json(staff);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = StaffController;
