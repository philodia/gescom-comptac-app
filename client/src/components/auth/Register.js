import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Navbar from "../common/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [option, setOption] = useState("gescom");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", {
        email,
        password,
        nom,
        prenom,
        option,
      })
      .then((response) => {
        if (response.data.success) {
          window.location.href = "/";
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="option">Option</label>
            <select name="option" onChange={(e) => setOption(e.target.value)}>
              <option value="gescom">Gescom</option>
              <option value="compta">Compta</option>
            </select>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </BrowserRouter>
  );
};

export default Register;
