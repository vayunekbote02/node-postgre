const express = require("express");
const router = express.Router();

// Define a simple route
router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
