const houseController = require('../controllers/houses.js');
const express = require("express");
const router = express.Router();

// GET - /houses
router.get('/',houseController.getHouses)

module.exports = router;