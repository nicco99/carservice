const express = require("express");

const router = express.Router();

// 404 - Not Found
router.use((req, res) => {
  res.render("404");
});

// 500 - Server Error
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.render("500");
});

module.exports = router;