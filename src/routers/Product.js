const router = require("express").Router();
const ProductController = require("../controllers/ProductController");
router.post("/", ProductController.addAProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:name", ProductController.filterProduct);
router.put("/off/:id", ProductController.OffProduct);
router.delete("/delete/:id", ProductController.deleteAProduct);

module.exports = router;
