const router = require("express").Router();
const TimeKeepingController = require("../controllers/TimeKeepingController");

router.post("/make", TimeKeepingController.makeWorkDays);
router.get("/timeKeeping", TimeKeepingController.getAllTimeKeeping);

module.exports = router;
