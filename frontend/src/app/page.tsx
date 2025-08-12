import { articleApi } from '@/entities/article/api/articleApi';
import { ArticleList } from '@/features/article-list/ui/ArticleList';
import { Card } from '@blueprintjs/core';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const articles = await articleApi.getArticles();

  return (
    <main style={{ maxWidth: 900, margin: '24px auto', padding: 16 }}>
      <Card elevation={0} style={{ padding: 16 }}>
        <div style={{ marginTop: 12 }}>
          <ArticleList articles={articles} />
        </div>
      </Card>
    </main>
  );
}
