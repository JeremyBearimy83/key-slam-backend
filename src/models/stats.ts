// const fs = require("fs");
// const path = require("path");

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const statSchema = new Schema(
  {
    wpm: { type: Number, required: true },
    acc: { type: Number, required: true },
    mis: { type: Array },
  },
  { timestamps: true }
);

const Stat = mongoose.model("Stat", statSchema);
export default Stat;

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
