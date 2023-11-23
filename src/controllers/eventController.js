const Event =  require('../models/Event')
const eventService = require('../services/EventService')

const eventController = {
    async getEvents(req, res) {
        try {
            const { success, events } = await eventService.getEvents(); 
            res.status(200).json({ success, events }); 
        } catch (error) {
            res.status(500).json({ success: false,  message: "Error al obtener los eventos: " + error.message });
        }
    },
    async getOneEvent(req, res) {
        try {
            const payload = req.params.id 
            const { success, event } = await eventService.getOneEvent(payload); 
            res.status(200).json({ success, event }); 
        } catch (error) {
            res.status(500).json({ success: false,  message: "Error al obtener evento: " + error.message });
        }
    },

    async createEvent(req, res) {
        try {
            const payload = req.body;
            const eventCreated = await eventService.createEvent(payload);

            if (eventCreated) {
                res.status(201).json({ message: "Event created" });
            } else {
                res.send("Error created event");
            }
        } catch (error) {
            res.status(500).json({ message: "Error created event: " + error.message });
        }
    },


    async deleteAllEvents(req, res) {
        try {
            const result = await eventService.deleteAllEvents();
            
            if (result.success) {
                res.status(201).json(result);
            } else {
                res.status(500).json({ success: false, message: "Error al eliminar todos los eventos." });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Error al eliminar todos los eventos: " + error.message });
        }
    },
    async deleteEvent(req, res) {
        try {
            const payload = req.params.id
            const event = await eventService.deleteEvent(payload);
            
            if (event) {
                res.status(201).json({success: true, message: "evento eliminado"});
            } 
        } catch (error) {
            res.status(500).json({ success: false, message: "Error al eliminar evento: " + error.message });
        }
    },
    async updateEvent(req, res) {
        try {
            const eventId = req.params.id
            const updateData = req.body
            console.log("eventId controller", eventId)
            const updatedEvent = await eventService.updateEvent(eventId, updateData);
            
            if (updatedEvent) {
               res.status(200).json({
                success: true,
                event: updatedEvent,
                message: "Evento actualizado"
               })
            } else {
               res.status(404).json({
                success: false,
                message: "no se pudo actualizar"
               })
            }
        } catch (error) {
            res.status(500).json({ success: false, message: "Error al actualizar evento: " + error.message });
        }
    },


    async createEvents(req, res) {
        try {
            const payload = req.body.events;
            const eventsCreated = await eventService.createEvents(payload);
            res.status(200).json({
                success: true,
                events: eventsCreated,
                message: "Events created"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error create events: " + error.message
            });
        }
    }

}

module.exports = eventController