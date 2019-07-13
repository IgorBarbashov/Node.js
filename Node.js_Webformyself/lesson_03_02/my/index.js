const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Our express-server is runnig on port ${PORT}`);
});
