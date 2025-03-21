const Staff = require("../../models/Staff");
const User = require("../../models/User");

const StaffController = {
  // thêm 1 Staff
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
        Role: req.body.Role,
        User: req.body.User,
      });

      if (!newStaff) return res.json({ messgae: "Thông tin không hợp lệ." });
      const staff = await newStaff.save();
      res.status(200).json(staff);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  grantPermisstion: async (req, res) => {
    try {
      const { id } = req.params;
      const { permisstion } = req.body;
      const staff = await Staff.findById(id);

      if (!staff)
        return res.json({ message: "Không có tài khoản của staff này" });

      const per = staff.grantPermisstion.findIndex((p) => p === permisstion);
      if (per !== -1) {
        staff.grantPermisstion.splice(per, 1);
      } else {
        staff.grantPermisstion.push(permisstion);
      }
      await staff.save();
      res.status(200).json(staff);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  updateAStaff: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = req.body;
      const staff = await Staff.findByIdAndUpdate(id, data, { new: true });
      if (!staff) return res.json({ message: "Không tồn tại khách hàng" });
      await User.findOneAndUpdate(
        { Staff: id },
        { Role: data.Permissions },
        { new: true }
      );
      res.status(200).json(staff);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = StaffController;
