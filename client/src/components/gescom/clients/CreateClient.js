import React, { useState } from "react";
import { Button, Form, Input } from "react-bootstrap";
import axios from "axios";

const CreateClient = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nom,
      prenom,
      email,
      telephone,
      adresse,
      logo,
    };

    await axios.post("/gescom/compta/clients", data);

    window.location.href = "/";
  };

  return (
    <div className="container">
      <h1>Créer un client</h1>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Adresse"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        <Input
          type="file"
          placeholder="Logo"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <Button type="submit">Créer</Button>
      </Form>
    </div>
  );
};

export default CreateClient;
