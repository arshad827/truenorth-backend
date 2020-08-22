import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('get')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('getHello/:payload')
  getHello(@Param('payload') payload: string): any {
    return this.appService.getHello(payload);
  }
}
