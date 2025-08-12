import { ApiProperty } from '@nestjs/swagger';
import type { Article } from '../types';

export class ArticleDto implements Article {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Introduction to NestJS' })
  title!: string;

  @ApiProperty({
    example: 'A short intro to building scalable server-side apps with NestJS.',
  })
  description!: string;

  @ApiProperty({ example: 'Long form content...' })
  content!: string;

  static fromEntity(entity: Article): ArticleDto {
    const dto = new ArticleDto();
    dto.id = entity.id;
    dto.title = entity.title;
    dto.description = entity.description;
    dto.content = entity.content;
    return dto;
  }
}
