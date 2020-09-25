import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Store from './app/store/storeConfig';

//screens
import AddOfferScreen from './app/screens/AddOfferScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import OffersScreen from './app/screens/OffersScreen';
import MyOffersScreen from './app/screens/MyOffersScreen';
import OfferDetailsScreen from './app/screens/OfferDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Offers" component={OffersScreen} />
      <Stack.Screen name="Details" component={OfferDetailsScreen} />
      <Stack.Screen name="My offers" component={MyOffersScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Profile" component={ProfileScreen} />
      <Stack.Screen name="My offers" component={MyOffersScreen} />
      <Stack.Screen name="Details" component={OfferDetailsScreen} />
    </Stack.Navigator>
  );
}

function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Offer" component={AddOfferScreen} />
      <Stack.Screen name="Details" component={OfferDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user-o';
              } else if (route.name === 'Offers') {
                iconName = focused ? 'list' : 'list-alt';
              } else if (route.name === 'New Offer') {
                iconName = focused ? 'plus-square' : 'plus-square-o';
              }

              // You can return any component that you like here!
              return (
                <FontAwesomeIcon name={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fc5c65',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Offers" component={MainStack} />
          <Tab.Screen name="New Offer" component={AddStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
