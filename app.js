const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

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

app.use("/", (req, res) => {
  res.status(404).render("404");
});

app.listen(7000, () => console.log("Listening on port 7000"));
