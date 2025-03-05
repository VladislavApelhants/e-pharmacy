import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { validateEnvVariable } from "./utils/env.util";
import { AuthModule } from "./auth/auth.module";
import { MedicinesModule } from "./medicine/medicine.module";
import { StoreModule } from "./stores/stores.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { CartModule } from "./cart/cart.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(validateEnvVariable(process.env.DB_URI, "DB_URI")),
    AuthModule,
    MedicinesModule,
    StoreModule,
    ReviewsModule,
    CartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
