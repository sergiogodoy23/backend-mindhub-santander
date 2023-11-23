const mongoose = require("mongoose");

const passwordDB = process.env.PASSWORD_DB_CONECTION
const userDB = process.env.USER_DB_CONECTION

  mongoose
    .connect(
      `mongodb+srv://${userDB}:${passwordDB}@cluster0.fkv0ktt.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((err) => console.log("Error conecnecting to database: " + err));


