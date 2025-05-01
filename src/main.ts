import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//nest g controller [name] dùng để tạo một controller mới trong dự án NestJS.
//nest g service [name] dùng để tạo một service mới trong dự án NestJS.
//nest g module [name] dùng để tạo một module mới trong dự án NestJS.