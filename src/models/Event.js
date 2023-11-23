const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Object, 
        required: true
    },
    description:{
        type: String, 
    },
    image:{
        type: String, 
        required: true
    },
    place:{
        type: String, 
        required: true
    },
    price:{
        type: Number, 
        min: 0,
        required: true 
    },
    capacity:{
        type: Number, 
        required: true
    },
    assistance:{
        type: Number, 
    },
    estimate:{
        type: Number, 
    },
})

const Event = mongoose.model("Event", EventSchema)

module.exports = Event