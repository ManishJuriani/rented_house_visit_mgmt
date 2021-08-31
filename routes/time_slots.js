const timeSlotController = require('../controllers/time_slots.js');
const express = require("express");
const router = express.Router();

// PUT - /timeslots/:id
router.put('/:id',timeSlotController.bookTimeSlot)

// GET - /timeslots
router.get('/',timeSlotController.getTimeSlots)


module.exports = router;