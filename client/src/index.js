import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Compta from "./pages/Compta";
import Gescom from "./pages/Gescom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserProfil from "./components/auth/UserProfil";
import Footer from "./components/common/Footer";
import CustomNavbar from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <>
      
          <CustomNavbar/>
        <BrowserRouter>
       <Container>
        {/*}  <Navbar bg="dark" variant="dark">
      //       <Navbar.Brand href="/">Gescom-Compta</Navbar.Brand>
      //       <Nav>
      //         <Nav.Link href="/">Accueil</Nav.Link>
      //         <Nav.Link href="/login">Connexion</Nav.Link>
      //         <Nav.Link href="/register">Inscription</Nav.Link>
      //         <Nav.Link href="/userprofil">Profil</Nav.Link>
      //       </Nav>
    //     </Navbar> */}
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/Compta" element={<Compta />} />
             <Route path="/gescom" element={<Gescom />} />
             <Route path="/login" element={<Login />} />
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
