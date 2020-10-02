const Stat = require("../models/stats");

exports.getRace = (req, res) => {
  res.render("user-race", { user: "Ujjwal Singhal" });
};

exports.postStats = (req, res) => {
  const stat = new Stat(req.body.wpm, req.body.acc);
  stat.save();
  res.redirect("/user/stats");
};

exports.getStats = (req, res) => {
  Stat.fetchAll((stats) => {
    res.render("user-stats", { stats: stats, pageTitle: "stats" });
  });
};

exports.getHistory = (req, res) => {
  res.render("user-history", { pageTitle: "history" });
};
