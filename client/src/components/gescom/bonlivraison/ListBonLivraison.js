import React, { useState, useEffect } from "react";
import { Table, Thead, Tr, Th, Td } from "react-bootstrap";
import { axios } from "axios";

const ListBonLivraisonComponent = () => {
  const [bonLivraisons, setBonLivraisons] = useState([]);

  useEffect(() => {
    axios
      .get("/api/bon-livraison")
      .then((response) => {
        setBonLivraisons(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Liste des bons de livraison</h1>

      <Table striped bordered hover>
        <Thead>
          <Tr>
            <Th>Numéro</Th>
            <Th>Devis</Th>
            <Th>Date</Th>
            <Th>Montant</Th>
          </Tr>
        </Thead>
        <tbody>
          {bonLivraisons.map((bonLivraison) => (
            <Tr key={bonLivraison.id}>
              <Td>{bonLivraison.numero}</Td>
              <Td>{bonLivraison.devis.numero}</Td>
              <Td>{bonLivraison.date}</Td>
              <Td>{bonLivraison.montant}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListBonLivraisonComponent;
