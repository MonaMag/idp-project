import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../model/types/types';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  tagTypes: ['Articles'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], void>({
      query: () => ({
        url: `articles`,
      }),
      providesTags: (result) => ['Articles'],
    }),
    addArticle: builder.mutation<Article, Article>({
      query: (article) => ({
        url: 'articles',
        method: 'POST',
        body: article,
      }),
      invalidatesTags: ['Articles'],
    }),
    updateArticle: builder.mutation({
      query: (article: Article) => ({
        url: `articles/${article.id}`,
        method: 'PUT',
        body: article,
      }),
      invalidatesTags: ['Articles'],
    }),
    removeArticle: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `articles/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Articles'],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useAddArticleMutation,
  useUpdateArticleMutation,
  useRemoveArticleMutation,
} = articlesApi;
