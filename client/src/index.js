import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Compta from "./pages/Compta";
import Gescom from "./pages/Gescom";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Register from "./components/auth/Register";
import UserProfil from "./components/auth/UserProfil";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compta" element={<Compta />} />
              <Route path="/gescom" element={<Gescom />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/userprofil" element={<UserProfil />} />
            </Routes>
            {/* Optional: Render Footer based on route requirements */}
            {
              // If you want Footer to be displayed only on specific routes,
              // move it inside the Routes component and add conditional rendering
            }
            <Footer />
          </Container>
        </BrowserRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
