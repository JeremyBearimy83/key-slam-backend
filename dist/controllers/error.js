"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = void 0;
exports.getError = function (req, res) {
  res.status(404).render("404", { pageTitle: "404" });
};
