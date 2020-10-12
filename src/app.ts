/**
 * TODO: Make mongo work like this
 * TODO: Make TypeScript and import work
 * TODO: Use mongo connect only when required
 * TODO: Configure .gitignore
 *
 */

// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const userRoutes = require("./routes/user");
// const adminRoutes = require("./routes/admin");
// const errorController = require("./controllers/error");

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import userRoutes from "./routes/user";
import adminRoutes from "./routes/admin";
import * as errorController from "./controllers/error";

const app = express();

const dbURI =
  "mongodb+srv://JeremyBearimy:ireneadler83@cluster0.cb7ve.mongodb.net/Key-Slam?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

  .then((result) => {
    console.log("Connected to db");
    app.listen(8000, () => console.log("Listening on port 8000"));
  })

  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/user", userRoutes);

app.use("/admin", adminRoutes);

// app.get("/admin/", (req, res) => {
//   res.send("<h1>Welcome Admin</h1>");
// });

// app.get("/admin/create-test", (req, res) => {
//   res.send("Create new typing test here");
// });

app.use("/", errorController.getError);
