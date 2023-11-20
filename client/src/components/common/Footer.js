import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Copyright &copy; 2023 Gescom-Compta</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
