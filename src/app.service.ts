import { HttpService, Injectable, Param } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }
  getHello(payload: string): any {
    console.log(payload);
    return this.httpService.get(`https://superheroapi.com/api/3151405918288313/search/${payload}`).pipe(
      map(response => response.data)
    );
  }
}
