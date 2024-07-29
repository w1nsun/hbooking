import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js/driver';
import * as postgres from 'postgres';

// export type DBSchema = typeof schema;

@Injectable()
export class DrizzleService {
  db: PostgresJsDatabase<any>;

  constructor(private configService: ConfigService) {}

  async onModuleInit(): Promise<void> {
    const host = this.configService.get<string>('DATABASE_HOST');
    const port = this.configService.get<number>('DATABASE_PORT');
    const user = this.configService.get<string>('DATABASE_USER');
    const pwd = this.configService.get<string>('DATABASE_PASSWORD');
    const dbName = this.configService.get<string>('DATABASE_NAME');

    const queryClient = postgres(
      `postgres://${user}:${pwd}@${host}:${port}/${dbName}`,
      { max: 5 },
    );

    this.db = drizzle(queryClient, { schema: {} });
  }
}
