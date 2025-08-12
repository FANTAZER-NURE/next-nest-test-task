import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all articles' })
  @ApiOkResponse({ description: 'List of articles', type: [ArticleDto] })
  getArticles(): ArticleDto[] {
    return this.articlesService.findAll().map(ArticleDto.fromEntity);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get article by id' })
  @ApiOkResponse({ description: 'Article details', type: ArticleDto })
  getArticle(@Param('id', ParseIntPipe) id: number): ArticleDto {
    return ArticleDto.fromEntity(this.articlesService.findOne(id));
  }
}
