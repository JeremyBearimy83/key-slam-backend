"use strict";
/**
 * TODO: Make mongo work like this
 * TODO: Make TypeScript and import work
 * TODO: Use mongo connect only when required
 * TODO: Configure .gitignore
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/user");
// const adminRoutes = require("./routes/admin");
// const errorController = require("./controllers/error");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var user_1 = __importDefault(require("./routes/user"));
var admin_1 = __importDefault(require("./routes/admin"));
var errorController = __importStar(require("./controllers/error"));
var app = express_1.default();
var dbURI = "mongodb+srv://JeremyBearimy:ireneadler83@cluster0.cb7ve.mongodb.net/Key-Slam?retryWrites=true&w=majority";
mongoose_1.default
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (result) {
    console.log("Connected to db");
    app.listen(8000, function () { return console.log("Listening on port 8000"); });
})
    .catch(function (err) { return console.log(err); });
app.set("view engine", "ejs");
app.set("views", "../views");
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static("public"));
app.use("/user", user_1.default);
app.use("/admin", admin_1.default);
// app.get("/admin/", (req, res) => {
//   res.send("<h1>Welcome Admin</h1>");
// });
// app.get("/admin/create-test", (req, res) => {
//   res.send("Create new typing test here");
// });
app.use("/", errorController.getError);
