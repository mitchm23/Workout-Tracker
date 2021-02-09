const db = require("../Models");
const path = require('path');


app.get("/exercise", (req,res)=>{
    res.sendFile(path.join(__dirname,"/.public/exercise.html"));
});

app.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname,"/.public/stats.html"));
});

app.get("/index", (req,res)=>{
    res.sendFile(path.join(__dirname,"/.public/index.html"));
});