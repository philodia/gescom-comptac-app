import React, { useState, useEffect } from "react";
import { Label, Input, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UserProfil = () => {
  const [user, setUser] = useState({
    id: null,
    nom: "",
    prenom: "",
    email: "",
  });

  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    axios
      .put("/api/users/me", user)
      .then((response) => {
        setUser(response.data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Profil utilisateur</h1>
      <div className="row">
        <div className="col-md-6">
          <Label htmlFor="nom">Nom</Label>
          <Input
            id="nom"
            type="text"
            value={user.nom}
            onChange={handleUpdate}
          />
        </div>
        <div className="col-md-6">
          <Label htmlFor="prenom">Prénom</Label>
          <Input
            id="prenom"
            type="text"
            value={user.prenom}
            onChange={handleUpdate}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={user.email}
            onChange={handleUpdate}
          />
        </div>
      </div>
      <Button onClick={handleSave}>Enregistrer</Button>
    </div>
  );
};

export default UserProfil;
