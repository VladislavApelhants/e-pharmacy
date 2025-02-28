import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Store, StoreSchema } from "src/database/schemas/store.schema";
import { StoreService } from "./stores.service";
import { StoreController } from "./stores.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
