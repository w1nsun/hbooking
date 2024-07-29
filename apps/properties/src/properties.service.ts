import { DrizzleService } from '@app/drizzle';
import { Injectable } from '@nestjs/common';
import { sql } from 'drizzle-orm';

@Injectable()
export class PropertiesService {
  constructor(private drizzleService: DrizzleService) {}

  async getHello(): Promise<string> {
    const a = await this.drizzleService.db.execute(sql`SELECT 1`);

    console.log({ a });

    return 'Hello World!';
  }
}
