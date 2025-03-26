const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const { use } = require("../../routers/Client");
const UserController = {
  // thêm 1 user
  addAUser: async (req, res) => {
    try {
      const pass = await bcrypt.hash(req.body.Password, 10);
      const newUser = new User({
        UserName: req.body.UserName,
        Password: pass,
        Role: req.body.Role,
        Staff: req.body.Staff,
        permisstions: req.body.permisstions,
      });

      if (!newUser) return res.json({ message: "Thông tin không hợp lệ." });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  checkUser: async (req, res) => {
    try {
      const { UserName, Password } = req.body;

      const user = await User.findOne({ UserName });
      if (!user)
        return res.status(400).json({ message: "Thông tin không hợp lệ." });

      const isHash = await bcrypt.compare(Password, user.Password);
      if (!isHash) {
        return res.status(401).json({ message: "Mật khẩu không đúng!" });
      }

      const token = jwt.sign(
        { UserName: user.UserName, Role: user.Role || "Nhân viên" },
        "Keytoken",
        { expiresIn: "1d" }
      );

      res.status(200).json({ user, token });
    } catch (error) {
      console.error("Lỗi trong checkUser:", error);
      res.status(500).json({ message: "Lỗi server", error });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const user = await User.find().populate("Staff");
      if (!user) return res.json({ message: "Không có tài khoản nào cả" });
      res.status(200).json(user);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  delAUserByIdFromStaff: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOneAndDelete({ Staff: id });
      if (!user)
        return res.json({ message: "Không có tài khoản của user này" });
      res.status(200).json(user);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  ChangerPass: async (req, res) => {
    try {
      const id = req.params.id;
      const { passNew } = req.body.dataChangerPass;
      const hashedPassword = await bcrypt.hash(passNew, 10);

      const updatedUser = await User.findOne({ Staff: id });
      if (!updatedUser) {
        return res.json({ message: "Không có tài khoản của user này" });
      }
      updatedUser.Password = hashedPassword;
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  getAUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findOne({ Staff: id });
      res.status(200).json(user);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = UserController;
