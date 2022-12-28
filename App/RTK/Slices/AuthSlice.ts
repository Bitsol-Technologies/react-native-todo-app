import { createSlice } from '@reduxjs/toolkit';
import { AuthApi } from '../Api';

const INITIAL_STATE: IAuthState = {
  accessToken: undefined
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      AuthApi.endpoints.userLogin.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      }
    );
    builder.addMatcher(
      AuthApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      }
    );
  }
});

export default AuthSlice.actions;

export const { reducer } = AuthSlice;
