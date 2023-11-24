import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../common/Navbar";
import CreateClient from "./CreateClient";
import ListClient from "./ListClient";

const Clients = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          <Route path="/clients/create" component={CreateClient} />
          <Route path="/clients" component={ListClient} />
      </div>
    </BrowserRouter>
  );
};

export default Clients;
