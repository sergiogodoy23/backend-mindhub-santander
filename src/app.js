const express = require('express');
require("dotenv").config()
require("./db.js");
const indexRouter = require('./router/indexRouter')
const createError = require("http-errors")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const swaggerConfig = require("../swagger-openapi.json")

const app = express();

console.log(process.env.PASSWORD_DB_CONECTION)

app.use( express.json())

app.use(cors())

app.use('/api', indexRouter)

const notFound = (req, res ,next) =>{
    next(createError(404, "No se encontro este endpoint"))
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
}

app.use(notFound)
app.use(errorHandler)


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig))


app.listen(3000, ()=> {
    console.log('listening on port 3000')
})




