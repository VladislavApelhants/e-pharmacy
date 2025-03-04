import * as mongoose from 'mongoose';
import { validateEnvVariable } from 'src/utils/env.util';
import "dotenv/config"

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      console.log("process.env.DB_URI",process.env.DB_URI)

      return await mongoose.connect(validateEnvVariable(process.env.DB_URI, 'DB_URI'))
    },
  },
];
