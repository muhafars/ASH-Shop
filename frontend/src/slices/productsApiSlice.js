import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  // The endpoints for the product API.
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
