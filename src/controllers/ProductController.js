const Product = require("../models/Product");

const ProductController = {
  // add a product
  addAProduct: async (req, res) => {
    try {
      const newProduct = new Product({
        nameProduct: req.body.nameProduct,
        Price: req.body.Price,
        imgUrl: req.body.imgUrl,
        quanlitySold: req.body.quanlitySold,
        Descriptions: req.body.Descriptions,
        Size: req.body.Size,
        code: req.body.code,
      });
      if (!newProduct) return res.json({ message: "thong tin khong hop le" });
      const product = await newProduct.save();
      res.status(200).json(product);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  // get all product

  getAllProduct: async (req, res) => {
    try {
      const product = await Product.find();
      if (!product) return res.json({ message: "Không có sản phẩm nào cả" });
      res.status(200).json(product);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  // tìm theo sản phẩm
  filterProduct: async (req, res) => {
    try {
      const { name } = req.params;
      const product = await Product.find({ code: name });
      if (product.length === 0)
        return res.json({ message: "Không có sản phẩm nào cả" });
      res.status(200).json(product);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  // đánh dấu hết hàng
  OffProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) return res.json({ message: "Không có sản phẩm nào cả" });
      if (product.State) {
        product.State = false;
      } else {
        product.State = true;
      }
      await product.save();
      res.status(200).json(product);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  deleteAProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const p = await Product.findByIdAndDelete(id);
      if (!p) return res.json({ message: "Không tìm thấy sản phẩm này" });
      return res.status(200).json(p);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = ProductController;
