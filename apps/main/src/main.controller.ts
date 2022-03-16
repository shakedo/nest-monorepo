import { Controller, Get } from '@nestjs/common';
import { MainService } from './main.service';
import { MyLibService } from '@app/my-lib';

@Controller()
export class MainController {
  constructor(
    private readonly mainService: MainService,
    private readonly myLibService: MyLibService,
  ) {}

  @Get()
  getHello(): string {
    return this.mainService.getHello() && this.myLibService.hello();
  }
}
