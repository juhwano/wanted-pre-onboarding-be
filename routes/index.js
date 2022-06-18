const express = require("express");
const router = express.Router();
const applicationRouter = require("./application/index");
const historyRouter = require("./history/index");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "원티드 프리온보딩 백엔드 코스" });
});

router.use("/application", applicationRouter);
router.use("/history", historyRouter);

module.exports = router;
