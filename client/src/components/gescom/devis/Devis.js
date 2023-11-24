import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../common/Navbar";
import CreateDevis from "./CreateDevis";
import ListDevis from "./ListDevis";

const Devis = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          <Route path="/devis/create" component={CreateDevis} />
          <Route path="/devis" component={ListDevis} />
        </div>
    </BrowserRouter>
  );
};

export default Devis;
