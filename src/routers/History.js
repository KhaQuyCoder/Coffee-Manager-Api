const router = require("express").Router();
const HistoryController = require("../controllers/HistoryController");
router.post("/add", HistoryController.AddOneHistory);

router.get("/getAll", HistoryController.getAllHistory);

module.exports = router;
