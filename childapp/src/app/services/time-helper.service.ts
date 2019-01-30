import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

  constructor() { }

  getDuration(seconds: number): string {

    // tslint:disable-next-line:radix
    const min = parseInt((seconds / 60) + '');
    const sec = seconds % 60;


    return '' + min + ':' + sec;
  }

}
