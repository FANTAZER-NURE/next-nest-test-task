import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesService],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should return a non-empty list', () => {
    const articles = service.findAll();
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should return one by id', () => {
    const article = service.findOne(1);
    expect(article.id).toBe(1);
  });

  it('should throw NotFound for invalid id', () => {
    expect(() => service.findOne(9999)).toThrow();
  });

  it('should throw BadRequest for non-positive id', () => {
    expect(() => service.findOne(0)).toThrow();
    expect(() => service.findOne(-5)).toThrow();
  });
});
