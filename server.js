// server.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Configurer Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//mongoose.model('User', User);
mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Route
const homeRoute = require("./routes/homeRoute");
const loginRoute = require('./routes/loginRoute');
const logoutRoute = require("./routes/logoutRoute");
const registerRoute = require('./routes/registerRoute');
const userprofilRoute = require('./routes/userprofilRoute');
const comptaRoute = require("./routes/comptaRoute");
const gescomRoute = require("./routes/gescomRoute");

 // route
http://localhost:5000/auth/*
 app.use("/", homeRoute);
 app.use("/api/login", loginRoute);
 app.use("/logout", logoutRoute);
 app.use("/api/register", registerRoute);
 app.use("/api/userprofil", userprofilRoute);
 app.use("/compta", comptaRoute);
 app.use("/gescom", gescomRoute);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});