const express = require("express");
const router = express.Router();

const { getDebounceData } = require("./controllers/getDebounceData");

router.get("/:state/:searchTerm", getDebounceData);

module.exports = router;
