import AsyncStorage from '@react-native-async-storage/async-storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

const authReduxWhiteList = createWhitelistFilter('authSlice');

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['authSlice'],
    transforms: [authReduxWhiteList],
  },
};

export default REDUX_PERSIST;
