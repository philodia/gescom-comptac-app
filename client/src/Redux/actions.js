export const ADD_CLIENT = "ADD_CLIENT";
export const ADD_FOURNISSEUR = "ADD_FOURNISSEUR";
export const ADD_FACTURE = "ADD_FACTURE";

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: client,
});

export const addFournisseur = (fournisseur) => ({
  type: ADD_FOURNISSEUR,
  payload: fournisseur,
});

export const addFacture = (facture) => ({
  type: ADD_FACTURE,
  payload: facture,
});
