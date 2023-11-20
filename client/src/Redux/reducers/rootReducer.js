const rootReducer = (state, action) => {
    // Implement the reducer logic here
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  