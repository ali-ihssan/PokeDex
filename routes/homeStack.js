import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "./context";
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screens";
import Pokedex from "../Screens/Pokedex";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default () => {
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="poke" component={Pokedex} />
    </Tabs.Navigator>
    </NavigationContainer>
}