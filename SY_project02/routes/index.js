const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("main");
  res.send({ message: "hello root" });
  next();
});

module.exports = router;
