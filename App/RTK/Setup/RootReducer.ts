import { combineReducers } from '@reduxjs/toolkit';
import { AuthApi } from '../Api';
import { AuthSliceReducer } from '../Slices';

const RootReducer = combineReducers({
  authSlice: AuthSliceReducer,
  [AuthApi.reducerPath]: AuthApi.reducer,
});

export default RootReducer;
export type IRootReducer = typeof RootReducer;
export type IRootState = ReturnType<typeof RootReducer>;
