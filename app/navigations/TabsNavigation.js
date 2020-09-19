import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

//screens
import AddOfferScreen from '../screens/AddOfferScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OffersScreen from '../screens/OffersScreen';

const BottomTabs = createBottomTabNavigator({
  Profile: {screen: ProfileScreen},
  Offers: {screen: OffersScreen},
  AddOffer: {screen: AddOfferScreen},
});

export default createAppContainer(BottomTabs);
