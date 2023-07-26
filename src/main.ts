import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService= app.get(ConfigService);
  app.setGlobalPrefix(configService.get('URL_PREFIX'));
  await app.listen(configService.get('PORT'));
}
bootstrap();
