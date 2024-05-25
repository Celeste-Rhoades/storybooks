const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const User = require("../models/User");

const Story = require("../models/Story");

// @desc Login/Landing page
// @route GET /
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

module.exports = router;
