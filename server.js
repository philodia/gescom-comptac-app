// server.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
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

const Devis = require('./models/Devis');



router.get("/devis", (req, res) => {
  Devis.find().then((devis) => {
    res.json(devis);
  });
});

router.post("/devis", (req, res) => {
  const devis = new Devis({
    client: req.body.client,
    date: new Date(),
    produits: req.body.produits,
  });

  devis.save().then(() => {
    res.sendStatus(201);
  });
});

app.use(router);


//Route
const homeRoute = require("./routes/homeRoute");
const authRoute = require('./routes/authRoute');
const comptaRoute = require("./routes/comptaRoute");
const gescomRoute = require("./routes/gescomRoute");
const devisRoute = require("./routes/devisRoute");

 // route
http://localhost:5000/auth/*
 app.use("/", homeRoute);
 app.use('/auth', authRoute);
 app.use("/compta", comptaRoute);
 app.use("/gescom", gescomRoute);
 app.use("/devis", devisRoute);


// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});