import type { Article } from '@/entities/article/model/types';

export interface GET {
  '/articles': {
    params: never;
    result: Article[];
  };
  '/articles/:id': {
    params: never;
    result: Article;
  };
}

export type POST = Record<string, never>;

export type PUT = Record<string, never>;

export type DELETE = Record<string, never>;
