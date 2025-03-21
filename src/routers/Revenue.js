const router = require("express").Router();
const RevenueController = require("../controllers/RevenueController");
router.post("/make", RevenueController.makeRevenue);
router.post("/addRevenueDay/:year", RevenueController.addRevenueDay);
router.get("/findRevenue/:year", RevenueController.findRevenue);

module.exports = router;
