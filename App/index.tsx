import React, { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import { CreateStore } from './RTK/Setup';

export const { reduxStore } = CreateStore();

const App = () => {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Provider store={reduxStore}>
        <RootContainer />
      </Provider>
    </Suspense>
  );
};

export default App;
