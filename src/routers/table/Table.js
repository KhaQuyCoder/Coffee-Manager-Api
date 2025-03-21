const router = require("express").Router();
const TableController = require("../../controllers/TableController");
router.post("/", TableController.addATable);
router.get("/", TableController.getAllTable);
router.get("/:id", TableController.getATableById);
router.delete("/:id", TableController.delProductInTable);
router.delete("/delteALl/:id", TableController.delAllProductInTable);
router.put("/convert/:id", TableController.convertTable);
router.put("/quantity/:id", TableController.quantityToTable);
router.put("/:id", TableController.addProductToTable);

module.exports = router;
