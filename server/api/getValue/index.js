const express = require("express");
const router = express.Router();

const { getValue } = require("./controllers/getValue");

router.get("", getValue);

module.exports = router;
