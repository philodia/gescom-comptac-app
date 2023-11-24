import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SidebarGescom } from "../components/common/SidebarGescom";
import ClientsRoute from "../components/gescom/clients/Client";
import DevisRoute from "../components/gescom/devis/Devis";
import ProduitRoute from "../components/gescom/produits/Produit";
import BonLivraisonRoute from "../components/gescom/bonlivraison/BonLivraison";

const GescomComponent = () => {
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <BrowserRouter>
      <div className="container">
        <SidebarGescom currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
        <main>
          {currentRoute === "clients" && <ClientsRoute />}
          {currentRoute === "devis" && <DevisRoute />}
          {currentRoute === "produits" && <ProduitRoute />}
          {currentRoute === "bon-livraison" && <BonLivraisonRoute />}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default GescomComponent;
