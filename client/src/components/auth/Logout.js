import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Navbar from "../common/Navbar";

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    axios.post("/api/logout").then((response) => {
      if (response.data.success) {
        setIsLoggedOut(true);
      } else {
        alert(response.data.message);
      }
    });
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {isLoggedOut ? (
          <h1>Vous êtes déconnecté</h1>
        ) : (
          <button onClick={handleLogout}>Déconnexion</button>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Logout;
