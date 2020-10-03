const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.get("/stats", userController.getStats);

router.get("/stats/:statId", userController.getStat);

router.get("/race", userController.getRace);

router.get("/history", userController.getHistory);

router.post("/race", userController.postStats);

module.exports = router;
