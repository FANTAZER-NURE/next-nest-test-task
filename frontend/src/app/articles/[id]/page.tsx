import { notFound } from 'next/navigation';
import { articleApi } from '@/entities/article/api/articleApi';
import { ArticleDetail } from '@/features/article-detail/ui/ArticleDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  let article;
  try {
    article = await articleApi.getArticle(Number(id));
  } catch {
    notFound();
  }

  return <ArticleDetail article={article!} />;
}
