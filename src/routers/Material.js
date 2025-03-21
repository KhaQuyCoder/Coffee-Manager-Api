const router = require("express").Router();
const MaterialController = require("../controllers/MaterialController");

router.post("/make", MaterialController.addMaterial);
router.get("/get", MaterialController.getAllMaterial);
router.put("/update/:id", MaterialController.updateSLTKMaterial);
router.delete("/delete/:id", MaterialController.deleteAMaterial);

module.exports = router;
