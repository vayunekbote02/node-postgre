const express = require("express");
const router = express.Router();

// Define a simple route
router.get("/", (req, res) => {
  res.send("Welcome to the Kanban API");
});

module.exports = router;
