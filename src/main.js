import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Add body parser middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Serve static files and game.html from public directory
  const publicPath = join(__dirname, '..', 'public');
  app.use(express.static(publicPath));
  
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`Game server running on http://localhost:${port}`);
    console.log(`Play game at http://localhost:${port}/game.html`);
  });
}
bootstrap();
