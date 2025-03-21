const Client = require("../models/Client");

const ClientController = {
  addAClient: async (req, res) => {
    try {
      const newClient = new Client({
        Name: req.body.Name,
        Age: req.body.Age,
        Address: req.body.Address,
        Phone: req.body.Phone,
        Birth: req.body.Birth,
        Gender: req.body.Gender,
      });
      if (!newClient) return res.json({ message: "Thong tin khong chinh xac" });
      const client = await newClient.save();
      res.status(200).json(client);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  getAllClient: async (req, res) => {
    try {
      const client = await Client.find();
      if (!client) return res.json({ message: "Không có khách hàng nào cả" });
      res.status(200).json(client);
    } catch (error) {
      res.status(403).json(error);
    }
  },

  delAClient: async (req, res) => {
    try {
      const { id } = req.params;
      const client = await Client.findByIdAndDelete({ _id: id });
      if (!client) return res.json({ message: "Không tồn tại khách hàng" });
      res.status(200).json(client);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  updateAClient: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = req.body;
      const client = await Client.findByIdAndUpdate(id, data, { new: true });
      if (!client) return res.json({ message: "Không tồn tại khách hàng" });
      res.status(200).json(client);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = ClientController;
