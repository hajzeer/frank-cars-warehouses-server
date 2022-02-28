/** @format */

const getCarsController = require("../Controller/getCarsController");
const express = require("express");

const router = express.Router();

router.get("/warehouse", getCarsController);

module.exports = router;
