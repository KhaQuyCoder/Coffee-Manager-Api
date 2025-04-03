const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/Cafe_Store"
      // "mongodb+srv://khaquydev04:HOKhaQuy2209@coffeestore.jnoaw.mongodb.net/Cafe_Store?retryWrites=true&w=majority&appName=Cafe_Store"
    );
    console.log("ConnectDB thành công");
  } catch (error) {
    console.log("Kết nối thất bại" + error);
  }
};

module.exports = connectDB;
