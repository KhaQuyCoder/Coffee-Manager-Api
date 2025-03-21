const mongoose = require("mongoose");
const MaterialSchema = new mongoose.Schema({
  nameMaterial: {
    type: String,
    required: true,
  },
  DVT: {
    type: String,
    required: true,
  },
  NCC: {
    type: String,
    required: true,
  },
  Coin: {
    type: String,
    required: true,
  },
  NSX: {
    type: String,
    required: true,
  },
  HSD: {
    type: String,
    required: true,
  },
  SLNH: {
    type: String,
    default: "",
  },
  SLTK: {
    type: String,
    default: "",
  },
  NNK: {
    type: String,
  },
  Description: {
    type: String,
    default: "",
  },
});

const Material = mongoose.model("Material", MaterialSchema);
module.exports = Material;
