import {createStore, combineReducers} from 'redux'; //to create the store => props

//reducers
import manageOffers from './reducers/offersReducer';
import manageProfile from './reducers/userReducer';

export default storeConfig = createStore(
  combineReducers({manageOffers, manageProfile}),
);
