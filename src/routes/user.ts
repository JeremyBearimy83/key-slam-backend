// const express = require("express");
// const router = express.Router();

import express from "express";
import * as userController from "../controllers/users";

const router = express.Router();

router.get("/stats", userController.getStats);

router.get("/stats/:statId", userController.getStat);

router.get("/race", userController.getRace);

router.get("/history", userController.getHistory);

router.post("/race", userController.postStats);

export default router;
