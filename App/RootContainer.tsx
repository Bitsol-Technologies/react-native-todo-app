import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context';
import RootNavigator from './Navigation/RootNavigator';

const RootContainer = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default RootContainer;
