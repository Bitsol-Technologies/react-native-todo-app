import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { AuthSelector } from '../Selectors';
import { useAppSelector } from '../Hooks';
import PrimaryNavigator from './PrimaryNavigator';
import { CommonStyles } from '../Theme';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const authState = useAppSelector(AuthSelector);
  console.log('auth state: ', authState);

  return (
    <SafeAreaView style={CommonStyles.flex}>
      <NavigationContainer>
        {authState?.accessToken ? <PrimaryNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
