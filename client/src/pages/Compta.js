import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SidebarCompta } from "./common/SidebarCompta";

const ComptaComponent = () => {
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <BrowserRouter>
      <div className="container">
        <SidebarCompta currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
        <main>
          {currentRoute === "factures" && <FacturesRoute />}
          {currentRoute === "clients" && <ClientsRoute />}
          {currentRoute === "devis" && <DevisRoute />}
          {currentRoute === "bon-livraison" && <BonLivraisonRoute />}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default ComptaComponent;
