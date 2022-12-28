import { createSelector } from '@reduxjs/toolkit';
import { IRootState } from '../RTK/Setup';

const AuthSelector = createSelector(
  (state: IRootState) => state.authSlice,
  (state: IAuthState) => state
);

export { AuthSelector };
