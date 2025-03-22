const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khaquydev04:HOKhaQuy2209@coffeestore.jnoaw.mongodb.net/coffeestores?retryWrites=true&w=majorityPORT=5000"
    );
    console.log("ConnectDB thành công");
  } catch (error) {
    console.log("Kết nối thất bại" + error);
  }
};

module.exports = connectDB;
