import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GescomComptaHome from "./pages/GescomComptaHome";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Register from "./components/auth/Register";
import UserProfil from "./components/auth/UserProfil";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import CreateClient from "./components/clients/CreateClient";
import CreateProduit from "./components/produits/CreateProduit";
import ProduitList from "./components/produits/ProduitList";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<GescomComptaHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userprofil" element={<UserProfil />} />
        <CreateClient />
        <CreateProduit />
        <ProduitList />
      <Footer />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;



