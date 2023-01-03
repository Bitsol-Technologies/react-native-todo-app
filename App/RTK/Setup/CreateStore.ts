import { configureStore } from '@reduxjs/toolkit';
import { Middleware, StoreEnhancer } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { AuthApi } from '../Api';
import REDUX_PERSIST from './ReduxPersist';
import RootReducer from './RootReducer';

const CreateStore = () => {
  const middlewares: Middleware[] = [AuthApi.middleware];
  const enhancers: StoreEnhancer[] = [];

  const persistedReducer = REDUX_PERSIST.active
    ? persistReducer(REDUX_PERSIST.storeConfig, RootReducer)
    : RootReducer;

  const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(middlewares),
    devTools: __DEV__,
    enhancers,
  });

  let persistor;
  if (REDUX_PERSIST.active) {
    persistor = persistStore(reduxStore);
  }

  return { reduxStore, persistor };
};

export type IStore = ReturnType<typeof CreateStore>;
export type IAppDispatch = IStore['reduxStore']['dispatch'];

export default CreateStore;
