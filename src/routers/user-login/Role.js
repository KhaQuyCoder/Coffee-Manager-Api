const router = require("express").Router();
const RoleController = require("../../controllers/user-login/RoleController");
router.post("/", RoleController.addARole);

module.exports = router;
