import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');
  app.useStaticAssets('.'); //Use for SwaggerModule 

  const config = new DocumentBuilder()
    .setTitle('LeadBook APP APIs')
    .setDescription('The LeadBook App API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: "*"
  });
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  await app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log('Server: http://'+process.env.HOST+':'+process.env.PORT);
  });
}
bootstrap();
