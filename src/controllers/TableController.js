const Table = require("../models/Table");
const { addAProduct } = require("./ProductController");

const TableController = {
  // thêm 1 table
  addATable: async (req, res) => {
    try {
      const newTable = new Table({
        NumberTable: req.body.NumberTable,
        CurrentOrder: req.body.CurrentOrder,
        State: req.body.State,
      });

      if (!newTable) return res.json({ messgae: "Thông tin không hợp lệ." });
      const role = await newTable.save();
      res.status(200).json(role);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  // lấy all bàn
  getAllTable: async (req, res) => {
    try {
      const table = await Table.find();
      res.status(200).json(table);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // thêm món cho 1 bàn
  addProductToTable: async (req, res) => {
    try {
      const { product } = req.body;
      const { id } = req.params;
      const table = await Table.findById(id);
      if (!table) {
        return res.status(404).json({ message: "Không tìm thấy bàn này" });
      }
      if (!table.CurrentOrder.items) {
        table.CurrentOrder.items = [];
      }
      const p = table.CurrentOrder.items.findIndex(
        (item) => item.name === product.name
      );
      if (p !== -1) {
        table.CurrentOrder.items[p].quantity++;
      } else {
        table.CurrentOrder.items.push(product);
      }
      table.State = true;
      await table.save();
      res.status(200).json({ message: "Thêm sản phẩm thành công", table });
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      res.status(500).json({ error: "Lỗi server", details: error.message });
    }
  },
  // tăng giảm số lượng món
  quantityToTable: async (req, res) => {
    try {
      const { id } = req.params;
      const { request, idProduct } = req.body;
      const table = await Table.findById(id);
      if (!table) {
        return res.status(404).json({ message: "Không tìm thấy bàn này" });
      }

      const productIndex = table.CurrentOrder.items.findIndex(
        (p) => p._id.toString() === idProduct
      );
      if (request === "plus") {
        table.CurrentOrder.items[productIndex].quantity++;
      } else if (request === "minus") {
        if (table.CurrentOrder.items[productIndex].quantity > 1) {
          table.CurrentOrder.items[productIndex].quantity--;
        }
      }

      await table.save();
      res.status(200).json({ message: "Thao tác thành công", table });
    } catch (error) {
      console.error("Lỗi khi thao tác:", error);
      res.status(500).json({ error: "Lỗi server", details: error.message });
    }
  },
  // lấy 1 bàn theo id
  getATableById: async (req, res) => {
    try {
      const { id } = req.params;
      const table = await Table.findById({ _id: id });
      res.status(200).json(table);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // xóa 1 product trong bàn
  delProductInTable: async (req, res) => {
    try {
      const { id } = req.params;
      const { idProduct } = req.body;
      const table = await Table.findById(id);
      const p = table.CurrentOrder.items.findIndex(
        (item) => item._id.toString() === idProduct
      );
      if (p === -1) {
        return res.json({ message: "Không có sản phẩm này trong bàn" });
      }

      table.CurrentOrder.items.splice(p, 1);
      await table.save();
      res.status(200).json(table);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // xóa hết product trong bàn
  delAllProductInTable: async (req, res) => {
    try {
      const { id } = req.params;
      const table = await Table.findById(id);

      table.CurrentOrder.items = [];
      table.State = false;
      await table.save();

      res.status(200).json(table);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // chuyển bàn
  convertTable: async (req, res) => {
    try {
      const { idTableCovert, product } = req.body;
      const { id } = req.params;
      const table = await Table.findById(id); // bàn muốn chuyển qua
      const tableConvert = await Table.findById(idTableCovert); // bàn yêu cầu chuyển

      if (!table) {
        return res.status(404).json({ message: "Không tìm thấy bàn này" });
      }
      if (!tableConvert) {
        return res.status(404).json({ message: "Không tìm thấy bàn này" });
      }
      table.CurrentOrder.items = product;
      table.State = true;
      await table.save();

      tableConvert.CurrentOrder.items = [];
      tableConvert.State = false;
      await tableConvert.save();
      res.status(200).json({ message: "Thêm sản phẩm thành công", table });
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      res.status(500).json({ error: "Lỗi server", details: error.message });
    }
  },
};

module.exports = TableController;
