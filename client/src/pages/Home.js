import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../components/common/Navbar";

const Home = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <h1>Bienvenue sur Gescom-Compta</h1>
        <p>
          Cette application vous permet de gérer votre comptabilité de manière simple et
          efficace.
        </p>
        <p>
          Pour commencer, vous devez vous connecter ou créer un compte.
        </p>
        <button onClick={() => window.location.href="/login"}>Se connecter</button>
        <button onClick={() => window.location.href="/register"}>S'inscrire</button>
      </div>
    </BrowserRouter>
  );
};

export default Home;
