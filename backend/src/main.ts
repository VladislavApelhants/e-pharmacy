import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import "dotenv/config";
import { AppModule } from "./app.module";
import { validateEnvVariable } from "./utils/env.util";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("E-Pharmacy")
    .setDescription("API documentation for E-Pharmacy service")
    .addServer(
      validateEnvVariable(process.env.API_URL, "API_URL") ||
        "http://localhost:8080"
    )
    .addBearerAuth()
    .setVersion("1.0")
    .build();

  const PORT = Number(validateEnvVariable(process.env.PORT, "PORT")) || 5000;

  app.use(cookieParser());

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

bootstrap();
