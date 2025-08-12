'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { Button, Card, H2, Text, Classes } from '@blueprintjs/core';
import styles from './ArticleDetail.module.scss';
import type { Article } from '@/entities/article/model/types';

interface ArticleDetailProps {
  article: Article;
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  const backHref = useMemo(() => '/', []);

  return (
    <main className={styles.container}>
      <Link href={backHref}>
        <Button text="Back" icon="arrow-left" variant="minimal" />
      </Link>
      <Card className={styles.card}>
        <H2 className={styles.heading}>{article.title}</H2>
        <Text className={Classes.TEXT_MUTED}>{article.description}</Text>
        <div className={styles.content}>{article.content}</div>
      </Card>
    </main>
  );
}
