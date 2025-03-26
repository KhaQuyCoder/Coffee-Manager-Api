const router = require("express").Router();
const UserController = require("../../controllers/user-login/UserController");
router.post("/", UserController.addAUser);
router.post("/changerPass/:id", UserController.ChangerPass);
router.post("/login", UserController.checkUser);
router.get("/", UserController.getAllUser);
router.delete("/:id", UserController.delAUserByIdFromStaff);

module.exports = router;
