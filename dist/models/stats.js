"use strict";
// const fs = require("fs");
// const path = require("path");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var statSchema = new Schema({
    wpm: { type: Number, required: true },
    acc: { type: Number, required: true },
    mis: { type: Array },
}, { timestamps: true });
var Stat = mongoose_1.default.model("Stat", statSchema);
exports.default = Stat;
// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "stats.json"
// );
// module.exports = class Stat {
//   constructor(wpm, acc, mis) {
//     this.wpm = wpm;
//     this.acc = acc;
//     this.mis = mis.split(" ");
//   }
//   save() {
//     this.id = String(Math.random());
//     fs.readFile(p, (err, fileContent) => {
//       let stats = [];
//       if (!err) {
//         stats = JSON.parse(fileContent);
//       }
//       stats.push(this);
//       fs.writeFile(p, JSON.stringify(stats), (err) => console.log(err));
//     });
//   }
//   static fetchAll(cb) {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         console.log(err);
//         cb([]);
//       } else {
//         cb(JSON.parse(fileContent));
//       }
//     });
//   }
//   static findById(id, cb) {
//     fs.readFile(p, (err, fileContent) => {
//       const stats = JSON.parse(fileContent);
//       console.log(typeof id);
//       console.log(stats);
//       const stat = stats.find((el) => {
//         console.log(typeof id);
//         return el.id == id;
//       });
//       console.log(stat);
//       cb(stat);
//     });
//   }
// };
