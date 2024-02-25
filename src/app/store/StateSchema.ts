import { articlesApi } from '../../entities/Article/api/articlesApi';

export interface StateSchema {
  [articlesApi.reducerPath]: ReturnType<typeof articlesApi.reducer>;
}
