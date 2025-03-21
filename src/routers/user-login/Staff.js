const router = require("express").Router();
const StaffController = require("../../controllers/user-login/StaffController");
router.post("/grantPermisstion/:id", StaffController.grantPermisstion);
router.put("/update/:id", StaffController.updateAStaff);

router.post("/", StaffController.addAStaff);

module.exports = router;
