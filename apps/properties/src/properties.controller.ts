import { Controller, Get } from '@nestjs/common';

import { PropertiesService } from './properties.service';

@Controller()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.propertiesService.getHello();
  }
}
