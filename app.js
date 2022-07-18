const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routes/usersRouter");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/users", usersRouter);

//Home Route
app.get("/", (req, res)=>{
    res.send("Home Route")
});

//Invalid Route
app.use((req, res, next)=>{
    res.send("Route not found")
});

//Server error
app.use((err, req, res, next)=>{
    res.status(500).json({message: "Server Error"})
});

module.exports = app;