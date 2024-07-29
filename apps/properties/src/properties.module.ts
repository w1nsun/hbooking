import { DrizzleModule } from '@app/drizzle';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    DrizzleModule,
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
