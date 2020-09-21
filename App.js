import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import AddOfferScreen from './app/screens/AddOfferScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import OffersScreen from './app/screens/OffersScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Offers" component={OffersScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Prrofile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function AddStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Offer" component={AddOfferScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
