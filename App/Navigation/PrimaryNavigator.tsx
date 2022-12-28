import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../Screens';

const Stack = createNativeStackNavigator();

const PrimaryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default PrimaryNavigator;
