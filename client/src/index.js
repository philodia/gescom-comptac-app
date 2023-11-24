import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomeComponent from "./pages/Home";
import ComptaComponent from "./pages/Compta";
import GescomComponent from "./pages/Gescom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Register from "./components/auth/Register";
import UserProfil from "./components/auth/UserProfil";
import Footer from "./components/common/Footer";
import NavbarComponent from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <>
      
          <NavbarComponent/>
        <BrowserRouter>
       <Container>
        {/*}  <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">Gescom-Compta</Navbar.Brand>
              <Nav>
               <Nav.Link href="/">Accueil</Nav.Link>
               <Nav.Link href="/login">Connexion</Nav.Link>
               <Nav.Link href="/register">Inscription</Nav.Link>
               <Nav.Link href="/userprofil">Profil</Nav.Link>
              </Nav>
           </Navbar> */}
          <Routes>
             <Route path="/" element={<HomeComponent />} />
             <Route path="/Compta" element={<ComptaComponent />} />
             <Route path="/gescom" element={<GescomComponent />} />
             <Route path="/login" element={<Login />} />
             <Route path="/logout" element={<Logout />} />
             <Route path="/register" element={<Register />} />
             <Route path="/userprofil" element={<UserProfil />} />
             <Route path="/footer" element={<Footer />} />
           </Routes>
         </Container>
       </BrowserRouter> 
          <Footer></Footer>
          </>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
