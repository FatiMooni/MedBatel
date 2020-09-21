import {createStore, combineReducers} from 'redux'; //to create the store => props

//reducers
import manageOffers from './reducers/offersReducer';

export default storeConfig = createStore(combineReducers([manageOffers]));
