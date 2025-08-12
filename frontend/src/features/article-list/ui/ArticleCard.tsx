'use client';
import { memo, useMemo } from 'react';
import Link from 'next/link';
import { Card, H3, Text, Classes } from '@blueprintjs/core';
import type { Article } from '@/entities/article/model/types';
import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  article: Article;
}

function ArticleCardComponent({ article }: ArticleCardProps) {
  const { id, title, description } = article;

  const href = useMemo(() => `/articles/${id}`, [id]);

  return (
    <Card interactive={true} elevation={1} className={styles.card}>
      <H3 style={{ margin: '0 0 8px' }}>{title}</H3>
      <Text className={Classes.TEXT_MUTED}>{description}</Text>
      <Link href={href} className={styles.link}>
        View more
      </Link>
    </Card>
  );
}

export const ArticleCard = memo(ArticleCardComponent);
