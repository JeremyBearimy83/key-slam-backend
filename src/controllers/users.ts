//const Stat = require("../models/stats");

import { Request, Response } from "express";

import Stat from "../models/stats";

export const getRace = (req: Request, res: Response) => {
  res.render("user-race", { user: "Ujjwal Singhal", pageTitle: "race" });
};

export const postStats = async (req: Request, res: Response) => {
  const stat = new Stat({
    wpm: req.body.wpm,
    acc: req.body.acc,
    mis: req.body.mis.split(" "),
  });
  const savedStat = await stat.save();
  res.redirect("/user/stats");
};

export const getStats = async (req: Request, res: Response) => {
  // Stat.find({}).then((s) => console.log(Array.isArray(s)));
  const stats = await Stat.find({});
  res.render("user-stats", { stats: stats, pageTitle: "stats" });
};

export const getStat = async (req: Request, res: Response) => {
  const stat = await Stat.findById(req.params.statId);
  res.render("user-stat", { stat: stat, pageTitle: "stats" });
};

export const getHistory = (req: Request, res: Response) => {
  res.render("user-history", { pageTitle: "history" });
};
