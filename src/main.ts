import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  await app.listen(3000);
}
bootstrap();
