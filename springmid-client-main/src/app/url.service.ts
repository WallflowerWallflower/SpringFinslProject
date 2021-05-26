import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public static URL = 'http://localhost:8081';
  constructor() { }
}
