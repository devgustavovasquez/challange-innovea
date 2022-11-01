import { Injectable } from '@nestjs/common';
import { NewsApiService } from 'src/infra/news-api.service';
import { ListArticlesRequestDTO } from '../dtos/list-articles-request.dto';
import { ListArticlesResponseDTO } from '../dtos/list-articles-response.dto';

@Injectable()
export class ListArticlesUseCase {
  constructor(private readonly articlesService: NewsApiService) {}

  async handler(
    data: ListArticlesRequestDTO,
  ): Promise<ListArticlesResponseDTO> {
    const { articles } = await this.articlesService.getArticlesData(data);

    const response = articles.map((article) => ({
      author: article.author,
      title: article.title,
      description: article.description,
    }));

    return response;
  }
}
