const router = require("express").Router();
const ClientController = require("../../src/controllers/ClientController");
router.post("/", ClientController.addAClient);
router.put("/update/:id", ClientController.updateAClient);
router.get("/", ClientController.getAllClient);
router.delete("/:id", ClientController.delAClient);

module.exports = router;
