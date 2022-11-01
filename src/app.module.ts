import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { env } from './config/env';
import { envValidation } from './config/env-validation';
import { ArticlesModule } from './domain/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ ...envValidation, load: [env] }),
    ArticlesModule,
  ],
})
export class AppModule {}
