import React, { useState, useEffect } from "react";
import { Table, Thead, Tr, Th, Td } from "react-bootstrap";
import { axios } from "axios";

const ComptesListComponent = () => {
  const [comptes, setComptes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/comptes")
      .then((response) => {
        setComptes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Comptes</h1>

      <Table striped bordered hover>
        <Thead>
          <Tr>
            <Th>Libellé</Th>
            <Th>Type</Th>
            <Th>Solde</Th>
          </Tr>
        </Thead>
        <tbody>
          {comptes.map((compte) => (
            <Tr key={compte.id}>
              <Td>{compte.libelle}</Td>
              <Td>{compte.type}</Td>
              <Td>{compte.solde}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ComptesListComponent;
