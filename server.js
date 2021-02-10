const mongoose = require("mongoose");
const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes.js")(app);
const apiRoutes = require("./routes/apiRoutes.js")(app);


const PORT = process.env.PORT||'8080'

const db = require("./Models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))



mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Mongoose successfully connected.')
    })
    .catch(err => {
    console.log('Mongoose connection error: ', err);
    });


    app.set("port",PORT);
    app.listen(process.env.PORT || 3000);