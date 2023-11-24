import React, { useState, useEffect } from "react";
import { Table, Thead, Tr, Th, Td } from "react-bootstrap";
import { axios } from "axios";

const ListDevisComponent = () => {
  const [devis, setDevis] = useState([]);

  useEffect(() => {
    axios
      .get("/api/devis")
      .then((response) => {
        setDevis(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Liste des devis</h1>

      <Table striped bordered hover>
        <Thead>
          <Tr>
            <Th>Numéro</Th>
            <Th>Client</Th>
            <Th>Date</Th>
            <Th>Montant</Th>
          </Tr>
        </Thead>
        <tbody>
          {devis.map((devis) => (
            <Tr key={devis.id}>
              <Td>{devis.numero}</Td>
              <Td>{devis.client.nom}</Td>
              <Td>{devis.date}</Td>
              <Td>{devis.montant}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListDevisComponent;
