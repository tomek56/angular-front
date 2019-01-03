import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkhelperService {

  //private host = 'http://127.0.0.1:8000';
  private host = 'http://217.182.169.127';

  constructor() { }

  getFullLink(url): string {
    return this.host + url;
  }

}
