import { ApiProperty } from '@nestjs/swagger';

class Article {
  @ApiProperty()
  author: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}

export class ListArticlesResponseDTO extends Array<Article> {}
