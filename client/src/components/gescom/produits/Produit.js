import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ProduitList = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
      .get("/gescom/compta/produits")
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Liste des produits</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Catégorie</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {produits.map((produit) => (
                <tr key={produit.id}>
                  <td>{produit.nom}</td>
                  <td>{produit.description}</td>
                  <td>{produit.prix}</td>
                  <td>{produit.quantite}</td>
                  <td>{produit.categorie}</td>
                  <td>
                    <Link to={`/gescom/compta/produits/${produit.id}`}>
                      Voir
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProduitList;
