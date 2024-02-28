// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import GameboardScreen from './components/GameboardScreen';
import ScoreboardScreen from './components/ScoreboardScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Gameboard') {
            iconName = focused ? 'gamepad-variant' : 'gamepad-variant-outline';
          } else if (route.name === 'Scoreboard') {
            iconName = focused ? 'scoreboard' : 'scoreboard-outline';
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gameboard" component={GameboardScreen} />
        <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
