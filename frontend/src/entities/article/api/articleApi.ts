import { getApi } from '@/api/httpClient';

export const articleApi = {
  getArticles: () => getApi('/articles'),
  getArticle: (id: number) => getApi(`/articles/${id}` as '/articles/:id'),
};
