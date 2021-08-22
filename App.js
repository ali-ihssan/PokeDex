import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Pokemons from './components/Pokemons';
import Details from './components/Details';

const appNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <appNavigator.Navigator>
        <appNavigator.Screen name="Home" component={Pokemons} />
        <appNavigator.Screen name="Details" component={Details} />
      </appNavigator.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
