const Material = require("../models/Material");
const MaterialController = {
  addMaterial: async (req, res) => {
    try {
      const newMaterial = new Material({
        nameMaterial: req.body.nameMaterial,
        DVT: req.body.DVT,
        NCC: req.body.NCC,
        Coin: req.body.Coin,
        NSX: req.body.NSX,
        HSD: req.body.HSD,
        SLNH: req.body.SLNH,
        SLTK: req.body.SLNH,
        NNK: req.body.NNK,
        Description: req.body.Description,
      });
      if (!newMaterial) return res.json({ message: "data khong chinh xac" });
      const material = await newMaterial.save();
      return res.status(200).json(material);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  getAllMaterial: async (req, res) => {
    try {
      const material = await Material.find();
      if (!material) return res.json({ message: "data rong" });
      return res.status(200).json(material);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  updateSLTKMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const { newSLTK } = req.body;
      const material = await Material.findById(id);
      if (!material)
        return res.json({ message: "Không tìm thấy nguyên liệu này" });
      material.SLTK = newSLTK;
      await material.save();
      return res.status(200).json(material);
    } catch (error) {
      res.status(403).json(error);
    }
  },
  deleteAMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const material = await Material.findByIdAndDelete(id);
      if (!material)
        return res.json({ message: "Không tìm thấy nguyên liệu này" });
      return res.status(200).json(material);
    } catch (error) {
      res.status(403).json(error);
    }
  },
};

module.exports = MaterialController;
