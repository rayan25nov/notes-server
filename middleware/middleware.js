const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Using cors for cross origin resourse sharing
app.use(cors({ origin: "*" }));

// Use body-parser middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const notesRoutes = require("../routes/route");
app.use("/note", notesRoutes);

module.exports = app;
