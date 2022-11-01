import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ListArticlesRequestDTO } from '../dtos/list-articles-request.dto';
import { ListArticlesResponseDTO } from '../dtos/list-articles-response.dto';
import { ListArticlesUseCase } from '../usecases/list-articles.usecase';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly listArticlesUseCase: ListArticlesUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: ListArticlesResponseDTO })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: Error })
  async getArticles(
    @Query() data: ListArticlesRequestDTO,
  ): Promise<ListArticlesResponseDTO> {
    return await this.listArticlesUseCase.handler(data);
  }
}
