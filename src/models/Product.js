const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    nameProduct: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default: "",
    },
    quanlitySold: {
      type: Number,
    },
    Descriptions: {
      type: String,
    },
    Size: {
      type: String,
    },
    code: {
      type: String,
    },
    State: {
      type: Boolean,
      default: true,
    },
  },
  { timeStamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
