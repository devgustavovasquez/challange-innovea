import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ListArticlesUseCase } from './usecases/list-articles.usecase';
import { NewsApiService } from '../infra/news-api.service';
import { HttpModule } from '@nestjs/axios';
import { ArticlesController } from './presentations/articles.controller';

@Module({
  imports: [HttpModule],
  providers: [NewsApiService, ConfigService, ListArticlesUseCase],
  controllers: [ArticlesController],
  exports: [],
})
export class ArticlesModule {}
