const express = require('express')
const eventController = require('../controllers/eventController')
const { verifyData, verifyId,  } = require('../middlewares/verifications')
const eventsRouter = express.Router()

eventsRouter.get("/", verifyData, eventController.getEvents)
 eventsRouter.get("/:id", verifyId, eventController.getOneEvent)
eventsRouter.post("/",  eventController.createEvent)
 eventsRouter.post("/All", verifyData, eventController.createEvents)
 eventsRouter.put("/:id", verifyId, eventController.updateEvent)
 eventsRouter.delete("/:id", verifyId, eventController.deleteEvent)
eventsRouter.delete("/", eventController.deleteAllEvents)

module.exports = eventsRouter;