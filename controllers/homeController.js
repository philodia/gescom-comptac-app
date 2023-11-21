// Import required dependencies
const express = require("express");
const router = express.Router();

// Define the home route
router.get("/", (req, res) => {
  // Render the home page
  res.render("home");
});

// Export the router
module.exports = router;
