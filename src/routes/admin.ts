import express from "express";
import * as adminController from "../controllers/admin";

const router = express.Router();

router.get("/", adminController.getAdmin);

router.get("/create-test", adminController.getNewTest);

export default router;
