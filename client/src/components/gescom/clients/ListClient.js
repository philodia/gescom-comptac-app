import React, { useEffect, useState } from "react";
import { Button, Table, Thead, Th, Tr, Td } from "react-bootstrap";
import { axios } from "axios";

const ListClientComponent = () => {
  const [clients, setClients] = useState([]);

  const handleGetClients = () => {
    axios
      .get("/api/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleGetClients();
  }, []);

  return (
    <div className="container">
      <h1>Liste des clients</h1>

      <Table striped bordered hover>
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Prénom</Th>
            <Th>Email</Th>
            <Th>Téléphone</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <tbody>
          {clients.map((client) => (
            <Tr key={client.id}>
              <Td>{client.nom}</Td>
              <Td>{client.prenom}</Td>
              <Td>{client.email}</Td>
              <Td>{client.telephone}</Td>
              <Td>
                <Button variant="primary" onClick={() => window.location.href = `/clients/${client.id}`}>
                  Voir
                </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListClientComponent;
