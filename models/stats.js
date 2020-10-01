const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "stats.json"
);

module.exports = class Stat {
  constructor(wpm, acc) {
    this.wpm = wpm;
    this.acc = acc;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let stats = [];
      if (!err) {
        stats = JSON.parse(fileContent);
      }
      stats.push(this);
      fs.writeFile(p, JSON.stringify(stats), (err) => console.log(err));
    });
    // stats.push(this);
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) cb([]);
      else cb(JSON.parse(fileContent));
    });
  }
};
