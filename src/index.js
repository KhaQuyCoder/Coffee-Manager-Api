const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const PORT = 4000;
const connectDB = require("../src/config/ConnectDB");
const userRouter = require("../src/routers/user-login/User");
const roleRouter = require("../src/routers/user-login/Role");
const loginRouter = require("../src/routers/user-login/Staff");
const tableRouter = require("../src/routers/table/Table");
const clientRouter = require("../src/routers/Client");
const staffRouter = require("../src/routers/Staff");
const productRouter = require("../src/routers/Product");
const workRouter = require("../src/routers/Timekeeping");
const revenueRouter = require("../src/routers/Revenue");
const materialRouter = require("../src/routers/Material");

app.use(express.json());
app.use(cors());
// kết nối db
connectDB();
// router
app.use("/home", (req, res) => res.send("hê lô"));

app.use("/user", userRouter);
app.use("/role", roleRouter);
app.use("/staff", loginRouter);
app.use("/table", tableRouter);
app.use("/client", clientRouter);
app.use("/new/staff", staffRouter);
app.use("/all/staff", staffRouter);
app.use("/add/product", productRouter);
app.use("/product", productRouter);
app.use("/workDay", workRouter);
app.use("/revenue", revenueRouter);
app.use("/material", materialRouter);

app.listen(PORT, () => {
  console.log("server is running...");
});
