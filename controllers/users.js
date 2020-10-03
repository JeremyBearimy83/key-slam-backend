const Stat = require("../models/stats");

exports.getRace = (req, res) => {
  res.render("user-race", { user: "Ujjwal Singhal", pageTitle: "race" });
};

exports.postStats = (req, res) => {
  const stat = new Stat(req.body.wpm, req.body.acc, req.body.mis);
  stat.save();
  res.redirect("/user/stats");
};

exports.getStats = (req, res) => {
  Stat.fetchAll((stats) => {
    res.render("user-stats", { stats: stats, pageTitle: "stats" });
  });
};

exports.getStat = (req, res) => {
  const id = req.params.statId;
  Stat.findById(id, (stat) => {
    res.render("user-stat", { stat: stat, pageTitle: "stats" });
  });
};

exports.getHistory = (req, res) => {
  res.render("user-history", { pageTitle: "history" });
};
