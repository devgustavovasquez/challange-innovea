import { IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListArticlesRequestDTO {
  @ApiProperty({ required: true })
  @IsDefined()
  q: string;
}
