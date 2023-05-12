const express = require('express');
const {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
} = require("../controllers/eventcontroller")


const router = express.Router();

//Get all workouts in the application 
router.get('/', getEvents)

// Get a single workout 
router.get('/:id', getEvent)

//post a single workout 
router.post('/' , createEvent)

//DELETE a single workout
router.delete('/:id', deleteEvent)

//Update a single workout
router.patch('/:id', updateEvent)

module.exports = router