'use client';
import { memo } from 'react';
import type { Article } from '@/entities/article/model/types';
import { ArticleCard } from './ArticleCard';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  articles: Article[];
}

function ArticleListComponent({ articles }: ArticleListProps) {
  return (
    <div className={styles.list}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export const ArticleList = memo(ArticleListComponent);
