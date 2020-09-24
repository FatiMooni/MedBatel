const initialState = {
  user: 'Unknown',
  location: 'Algiers, Algeria',
  contact: '07 84 56 23 19',
  uri: require('../../images/user.png'),
};

function manageProfile(state = initialState, action) {
  let next_state;
  switch (action.type) {
    case 'UPDATE_AVATAR':
      next_state = {
        ...state,
        uri: action.value,
      };
      return next_state || state;

    default:
      return state;
  }
}

export default manageProfile;
