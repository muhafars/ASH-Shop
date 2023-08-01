import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: USERS_URL,
        method: "POST",
        body: data,
      }),
    }),
    // getUsers: builder.query({
    //     query: function(params) ({
    //         url: USERS_URL,
    //         params: params
    //     })
    // }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
