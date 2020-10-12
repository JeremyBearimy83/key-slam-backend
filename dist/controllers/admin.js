"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewTest = exports.getAdmin = void 0;
exports.getAdmin = function (req, res) {
    res.send("<h1>Welcome Admin</h1>");
};
exports.getNewTest = function (req, res) {
    res.send("Create new typing test here");
};
