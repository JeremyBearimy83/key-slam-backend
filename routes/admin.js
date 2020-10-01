const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome Admin</h1>");
});

router.get("/create-test", (req, res) => {
  res.send("Create new typing test here");
});

module.exports = router;
