const express = require("express");
const router = express.Router();

const stats = [];

router.get("/stats", (req, res) => {
  res.render("user-stats", { stats: stats });
});

router.get("/race", (req, res) => {
  res.render("user-race", { user: "Ujjwal Singhal" });
});

router.get("/history", (req, res) => {
  res.render("user-history");
});

router.post("/race", (req, res) => {
  stats.push({ wpm: req.body.wpm, acc: req.body.acc });
  console.log(stats);
  res.redirect("/user/stats");
});

module.exports = router;
