const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.getAdmin);

router.get("/create-test", adminController.getNewTest);

module.exports = router;
