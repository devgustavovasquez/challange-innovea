import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { env } from './config/env';
import { envValidation } from './config/env-validation';

@Module({
  imports: [ConfigModule.forRoot({ ...envValidation, load: [env] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
