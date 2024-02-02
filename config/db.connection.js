const mongoose = require('mongoose')

const { DATABASE_URI } = process.env

mongoose.connect(DATABASE_URI)

mongoose.connection
    .on("open", () => console.log("you are connected to mongo"))
    .on("close", () => console.log("you are disconnected"))
    .on("error",(error) => console.log(error))