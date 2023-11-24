import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "../common/Navbar";
import CreateBonLivraison from "./CreateBonLivraison";
import ListBonLivraison from "./ListBonLivraison";

const BonLivraison = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/bonLivraison/create" component={CreateBonLivraison} />
          <Route path="/bonLivraison" component={ListBonLivraison} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default BonLivraison;
