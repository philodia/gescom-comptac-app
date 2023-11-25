import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/common/SidebarGescom";

const Gescom = () => {
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

  return (
    <div className="container">
      <Sidebar />
      <h1>Gestion commerciale</h1>
      <p>
        Cette page permet de gérer la gestion commerciale de l'entreprise.
      </p>
    </div>
  );
};

export default Gescom;
