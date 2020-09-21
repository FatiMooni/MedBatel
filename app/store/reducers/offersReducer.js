// Store/Reducers/favoriteReducer.js

const initialState = {offers: []};

function manageOffers(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_ADD':
      nextState = {
        ...state,
        offers: [...state.offers, action.value],
      };
      return nextState || state;
    case 'TOGGLE_DELETE':
      const index = state.offers.findIndex(
        (item) => item.id === action.value.id,
      );
      if (index !== -1) {
      }
      return nextState || state;
    default:
      return state;
  }
}

export default manageOffers;
