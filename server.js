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

app.get('/', (req, res) => {
  res.render('home', { title: 'Accueil' });
});

// Controller
const homeController = require('./controllers/homeController');
const loginController = require("./controllers/loginController");
const registerController = require("./controllers/registerController");
const comptaController = require("./controllers/comptaController");
const gescomController = require("./controllers/gescomController");

app.use('/', homeController);
app.use('/login', loginController);
app.use('/register', registerController);
app.use('/compta', comptaController);
  app.use(gescomController);


// Models
const HomeModel = require('./models/HomeModel');
const LoginModel = require('./models/LoginModel');
const RegisterModel = require('./models/RegisterModel');
const ComptaModel = require('./models/ComptaModel');
const GescomModel = require('./models/GescomModel');

app.use(HomeModel);
app.use(LoginModel);
app.use(RegisterModel);
app.use(ComptaModel);
app.use(GescomModel);

// Middleware
const authMiddleware = require('./middleware/authMiddleware');

app.use(authMiddleware);

//Express

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/user", (req, res) => {
  axios.get("/api/user").then((response) => {
    if (response.data.success) {
      res.status(200).send(response.data.data);
    } else {
      res.status(400).send(response.data.message);
    }
  });
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/gescom", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "gescom.html"));
});

app.get("/clients", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "clients.html"));
  
});

app.get("/api/clients", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      email: "jean.dupont@gmail.com",
      telephone: "06 12 34 56 78",
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Marie",
      email: "marie.martin@gmail.com",
      telephone: "06 98 76 54 32",
    },
  ]);
});

app.get("/api/devis", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      numero: "DEV-2023-07-20-001",
      client: {
        id: 1,
        nom: "Jean",
        prenom: "Dupont",
        email: "jean.dupont@example.com",
        telephone: "01 23 45 67 89",
      },
      date: "2023-07-20",
      montant: 1000,
    },
    {
      id: 2,
      numero: "DEV-2023-07-20-002",
      client: {
        id: 2,
        nom: "Marie",
        prenom: "Martin",
        email: "marie.martin@example.com",
        telephone: "02 34 56 78 90",
      },
      date: "2023-07-20",
      montant: 2000,
    },
  ]);
});

app.post("/api/produits", (req, res) => {
  const produit = req.body;

  res.status(201).json(produit);
});

app.get("/api/produits", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      reference: "PROD-001",
      libelle: "Produit 1",
      prix: 100,
    },
    {
      id: 2,
      reference: "PROD-002",
      libelle: "Produit 2",
      prix: 200,
    },
  ]);
});

app.post("/api/bon-livraison", (req, res) => {
  const bonLivraison = req.body;

  res.status(201).json(bonLivraison);
});

app.get("/compta", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "compta.html"));
});

app.post("/api/clients", (req, res) => {
  const client = req.body;

  res.status(201).json(client);
});

// Client 
{/*import HomeComponent from './client/src/pages/Home';
import NavbarComponent from './client/src/components/common/Navbar';
import FooterComponent from './client/src/components/common/Footer';
import LoginComponent from './client/src/components/auth/Login';
import RegisterComponent from './client/src/components/auth/Register';
import LogoutComponent from './client/src/components/auth/logout';
import UserProfilComponent from './client/src/components/auth/UserProfil';


app.use('/', (req, res) => {
  res.render('home', {
    components: {
      home: HomeComponent,
    },
  });
});

app.use('/', (req, res) => {
  res.render('index', {
    components: {
      navbar: NavbarComponent,
    },
  });
});

app.use('/', (req, res) => {
  res.render('index', {
    components: {
      footer: FooterComponent,
    },
  });
});

app.use('/login', (req, res) => {
  res.render('login', {
    components: {
      login: LoginComponent,
    },
  });
});

app.use('/register', (req, res) => {
  res.render('register', {
    component: {
      register: RegisterComponent,
    }
  })
});

app.use('/logout', (req, res) => {
  res.render('logout', {
    components: {
      logout: LogoutComponent,
    },
  });
});

app.use('/userProfil', (req, res) => {
  res.render('userProfil', {
    components: {
      userProfil: UserProfilComponent,
    },
  });
});*/}

// Axios
app.get("/api/auth/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const option = req.body.option;

  axios
    .post("/api/auth/login", {
      email,
      password,
      option,
    })
    .then((response) => {
      if (response.status === 200) {
        res.status(200).send(response.data);
      } else {
        res.status(401).send(response.data.error);
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/auth/logout", (req, res) => {
  axios
    .post("/api/auth/logout")
    .then((response) => {
      if (response.status === 200) {
        res.status(200).send(response.data);
      } else {
        res.status(401).send(response.data.error);
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/auth/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const option = req.body.option;

  axios
    .post("/api/auth/register", {
      email,
      password,
      option,
    })
    .then((response) => {
      if (response.status === 200) {
        res.status(200).send(response.data);
      } else {
        res.status(401).send(response.data.error);
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/auth/update-profil", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const option = req.body.option;

  axios
    .post("/api/auth/update-profil", {
      email,
      password,
      option,
    })
    .then((response) => {
      if (response.status === 200) {
        res.status(200).send(response.data);
      } else {
        res.status(401).send(response.data.error);
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});



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