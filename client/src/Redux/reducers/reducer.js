const initialState = {
    clients: [],
    fournisseurs: [],
    factures: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_CLIENT":
        return {
          ...state,
          clients: [...state.clients, action.payload],
        };
      case "ADD_FOURNISSEUR":
        return {
          ...state,
          fournisseurs: [...state.fournisseurs, action.payload],
        };
      case "ADD_FACTURE":
        return {
          ...state,
          factures: [...state.factures, action.payload],
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  