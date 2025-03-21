const Role = require("../../models/Role");

const RoleController = {
  // thêm 1 Staff
  addARole: async (req, res) => {
    try {
      const newRole = new Role({
        Name: req.body.Name,
        Permissions: req.body.Permissions,
      });

      if (!newRole) return res.json({ messgae: "Thông tin không hợp lệ." });
      const role = await newRole.save();
      res.status(200).json(role);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = RoleController;
