import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { MyLibModule, MyLibService } from '@app/my-lib';

@Module({
  imports: [MyLibModule],
  controllers: [MainController],
  providers: [MainService, MyLibService],
})
export class MainModule {}
