import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './BaseApi';
import { API_METHODS, ENDPOINTS } from '../../Config/Api';

const AuthApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'AuthRTK',
  endpoints: builder => ({
    userLogin: builder.mutation<IAuthState, ILoginUserRequest>({
      query: ({ email, password }) => {
        return {
          url: ENDPOINTS.LOGIN,
          method: API_METHODS.POST,
          body: { email, password }
        };
      }
    }),
    signup: builder.mutation<any, IRegisterUserRequest>({
      query: ({ email, password, firstName, lastName }) => {
        return {
          url: ENDPOINTS.REGISTER,
          method: API_METHODS.POST,
          body: { email, password, firstName, lastName }
        };
      }
    }),
    logout: builder.mutation({
      queryFn() {
        return {
          data: {
            accessToken: undefined
          }
        };
      }
    })
  })
});

export default AuthApi;

export const {
  util: AuthApiUtil,
  useUserLoginMutation,
  useSignupMutation,
  useLogoutMutation
} = AuthApi;
