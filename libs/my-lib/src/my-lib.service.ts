import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLibService {
  hello(): string {
    return 'hi';
  }
}
