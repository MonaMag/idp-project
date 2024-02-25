import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Article } from '../model/types/types';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], null>({
      query: () => `articles`,
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
