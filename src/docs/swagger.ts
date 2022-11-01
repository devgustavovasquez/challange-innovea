import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Articles API')
    .setDescription('This API returns information about article details')
    .setVersion('1.0')
    .addTag('articles')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
