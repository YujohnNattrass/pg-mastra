
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { PostgresStore } from '@mastra/pg';
import { weatherAgent } from './agents';

const storage = new PostgresStore({
  connectionString: process.env.DATABASE_URL!,
});
export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
  storage,
});
