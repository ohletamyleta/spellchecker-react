  
const initialState= 
{
  spells:[],
  currentUser: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
      };

    case "GET_ALL_SPELLS_SUCCESS":
      return { ...state, spells: action.spells };

    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.user };

    default:
      return state
  }
}