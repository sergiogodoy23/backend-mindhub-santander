const Event = require("../models/Event")


const eventDAL = {
    getAllEvents: async() => {
        return await Event.find() 
    },

    getOneEvent: async(payload) => {
        return await Event.findById(payload) 
    },
    
    createEvent: async (payload) => {
        try {
            
          const event = await Event.create(payload)

            return event
        } catch (error) {
            throw new Error(error)
        }
    },
    createEvents: async (payload) => {
        try {
            
          const events = await Event.insertMany(payload)

            return events
        } catch (error) {
            throw new Error(error)
        }
    },
    createEvents: async (payload) => {
        try {
            
          const events = await Event.insertMany(payload)

            return events
        } catch (error) {
            throw new Error(error)
        }
    },
    updateEvent: async (eventId, payload) => {
        try {
            console.log("eventId DAL", eventId)

          const updateEvent = await Event.findByIdAndUpdate(eventId, payload, {new: true})

            return updateEvent
        } catch (error) {
            throw new Error(error)
        }
    },
    
    deleteAllEvents: async () => {
        try {
            const events = await Event.deleteMany({});

            if (!events) {
                throw new Error("Error al eliminar todos los eventos");
            }

            return { success: true, message: "Todos los eventos eliminados", events: events };
        } catch (error) {
            throw new Error("Error al eliminar todos los eventos: " + error.message);
        }
    },
    deleteEvent: async (payload) => {
        try {
            const events = await Event.findByIdAndDelete(payload);

            if (!events) {
                throw new Error("Error al eliminar todos los eventos");
            }

            return { success: true, message: "Todos los eventos eliminados", events: events };
        } catch (error) {
            throw new Error("Error al eliminar todos los eventos: " + error.message);
        }
    }
}

module.exports = eventDAL