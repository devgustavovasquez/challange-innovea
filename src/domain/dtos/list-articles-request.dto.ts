import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListArticlesRequestDTO {
  @ApiProperty({ required: true })
  @IsString()
  q: string;
}
