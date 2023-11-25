import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap"
import { useHistory } from "react-router";
import axios from "axios";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((response) => {
        setIsLoggedIn(response.data.isLoggedIn);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogin = () => {
    history.push("/login");
  };

  const handleUserProfile = () => {
    if (isLoggedIn) {
      history.push("/profil");
    } else {
      handleLogin();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Image src="https://source.unsplash.com/random/1920x1080" alt="Image de garde" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
