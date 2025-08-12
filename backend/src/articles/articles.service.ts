import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { Article } from './types';
import { ARTICLES_MOCK } from './articles.mock';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = ARTICLES_MOCK;

  findAll(): Article[] {
    if (!Array.isArray(this.articles) || this.articles.length === 0) {
      throw new NotFoundException('No articles available');
    }
    return this.articles;
  }

  findOne(id: number): Article {
    if (!Number.isFinite(id) || id <= 0) {
      throw new BadRequestException('Article id must be a positive number');
    }
    const article = this.articles.find((a) => a.id === id);
    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }
    return article;
  }
}
