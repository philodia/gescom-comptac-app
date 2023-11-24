import React, { useState, useEffect } from "react";
import { Button, Table, Thead, Tr, Th, Td } from "react-bootstrap";
import { axios } from "axios";
import CreateProduitComponent from "./CreateProduit";

const ProduitComponent = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios
      .get("/api/produits")
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Produits</h1>

      <Button to="/produits/create">Créer un produit</Button>

      <Table striped bordered hover>
        <Thead>
          <Tr>
            <Th>Référence</Th>
            <Th>Libellé</Th>
            <Th>Prix</Th>
          </Tr>
        </Thead>
        <tbody>
          {produits.map((produit) => (
            <Tr key={produit.id}>
              <Td>{produit.reference}</Td>
              <Td>{produit.libelle}</Td>
              <Td>{produit.prix}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <CreateProduitComponent />
    </div>
  );
};

export default ProduitComponent;
