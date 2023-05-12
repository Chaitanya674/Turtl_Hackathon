const Event = require('../routes/event');
const mongoose = require('mongoose');

//get all events
const getEvents = async(req , res ) => {
    try{
        const all_event = await Event.find({}).sort({createdAt: -1})
        res.status(200).json(all_event)
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : e.message})
    }
}

//get a single events
const getEvent =  async(req , res ) => {
    const { id } = req.params
    try{
        const event = await Event.findById(id)
        res.status(200).json(event)
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : e.message})
    }
}

//create a new event
const createEvent = async (req , res ) => {
    const {title, des , loc} = req.body
    //add dot to db
    try {
        const event = await Event.create({title, des, loc})
        res.status(200).json(event)
    }catch (e) {
        res.status(400).json({error : e.message})
    }
}

//delete a single event
const deleteEvent = async (req , res) => {
    const { id } = req.params
        try{
            const event = await Event.findByIdAndDelete(id)
            res.status(200).json(event)
        }catch(error){
            console.log(error.message)
            res.status(400).json({error : e.message})
        }
}

//update a event
const updateEvent = async(req , res ) => {
    const { id } = req.params
    try{
        const event = await Event.findByIdAndUpdate({_id : id}, {...req.body})
        res.status(200).json(event)
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : e.message})
    }
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
}