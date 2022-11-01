import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ListArticlesRequestDTO } from 'src/domain/dtos/list-articles-request.dto';
import { catchError, firstValueFrom } from 'rxjs';

interface ServiceResponse {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string | null;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

@Injectable()
export class NewsApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getArticlesData(req: ListArticlesRequestDTO): Promise<ServiceResponse> {
    const url = 'https://newsapi.org/v2/everything';

    const config = {
      params: {
        apiKey: this.configService.get<string>('apiKey'),
        q: req.q,
      },
    };

    const { data } = await firstValueFrom(
      this.httpService.get<ServiceResponse>(url, config).pipe(
        catchError(() => {
          throw 'An unexpected error has occurred. Try again later';
        }),
      ),
    );

    return data;
  }
}
