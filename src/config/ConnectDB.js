const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Cafe_Store");
    console.log("ConnectDB thành công");
  } catch (error) {
    console.log("Kết nối thất bại" + error);
  }
};

module.exports = connectDB;
