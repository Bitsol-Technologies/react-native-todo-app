import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage, RegisterPage } from '../Screens';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginPage} />
      <AuthStack.Screen name="Register" component={RegisterPage} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
