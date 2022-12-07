const express = require("express");
const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send({ message: "test11111" });
  next();
});

router.get("/login", (req, res, next) => {
  res.send({ message: "login" });
  next();
});
router.get("/users", async (req, res, next) => {
  res.json([
    { id: 1, username: "fuck react" },
    { id: 2, username: "hate css" },
  ]);
  console.log(res.json);
  next();
});

module.exports = router;
