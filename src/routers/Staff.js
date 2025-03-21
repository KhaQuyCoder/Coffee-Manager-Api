const router = require("express").Router();
const StaffController = require("../../src/controllers/StaffController");
router.post("/", StaffController.addAStaff);
router.get("/:id", StaffController.getAStaff);
router.get("/", StaffController.getAllStaff);
router.delete("/:id", StaffController.delAStaff);

module.exports = router;
