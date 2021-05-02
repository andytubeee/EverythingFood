import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import {NavigationContainer} from '@react-navigation/native';
import NutritionPage from './pages/NutritionPage';
import IndividualRecipe from './pages/IndividualRecipe';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{gestureEnabled: false, headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RecipeSearch" component={RecipePage} />
        <Stack.Screen name="1RecipePage" component={IndividualRecipe} />
        <Stack.Screen name="NutritionPage" component={NutritionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
