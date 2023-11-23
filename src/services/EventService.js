const eventDAL = require('../repositories/eventDAL')

const eventService = {
    getEvents: async () => {
       try {
        const eventsFounded = await eventDAL.getAllEvents()
        return {success: true, events: eventsFounded}
        
       } catch (error) {
        return {success: false, message: "error service: " + error.message}
       }
       
    },
    getOneEvent: async (payload) => {
       try {
        const event = await eventDAL.getOneEvent(payload)
        return {success: true, event: event}
        
       } catch (error) {
        return {success: false, message: "error service: " + error.message}
       }
       
    },

    createEvent: async (payload) => {
        if(!payload){
            throw new Error("Se necesitan datos para crear el event")
        }

        try {
            const event = await eventDAL.createEvent(payload);

            if (event) {
                return event;
            }
        } catch (error) {
            throw new Error("Error al crear el evento: " + error.message);
        }
    },
    createEvents: async (payload) => {
        if(!payload){
            throw new Error("Se necesitan datos para crear el events")
        }

        try {
            const events = await eventDAL.createEvents(payload);

            if (events) {
                return events;
            }
        } catch (error) {
            throw new Error("Error al crear los eventos: " + error.message);
        }
    },
    updateEvent: async (eventId, payload) => {
        if(!eventId || !payload){
            throw new Error("Se necesitan datos para actualizar")
        }

        try {
            console.log("eventId service", eventId)

            const updateEvent = await eventDAL.updateEvent(eventId, payload);

            if (updateEvent) {
                return updateEvent;
            }
        } catch (error) {
            throw new Error("Error al crear los eventos: " + error.message);
        }
    },


    deleteAllEvents: async () => {
        try {
            const result = await eventDAL.deleteAllEvents();
            return result;
        } catch (error) {
            throw new Error("Error en el service al eliminar todos los eventos: " + error.message);
        }
    },
    deleteEvent: async (payload) => {
        try {
            const event = await eventDAL.deleteEvent(payload);
            return event;
        } catch (error) {
            throw new Error("Error en el service al eliminar todos los eventos: " + error.message);
        }
    }
}

module.exports = eventService