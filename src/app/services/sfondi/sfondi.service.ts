import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SfondiService {
  constructor() {}

  private bgInit =
    'https://images.unsplash.com/photo-1637315227093-646052d141d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80';

  bgPath: BehaviorSubject<string> = new BehaviorSubject(this.bgInit);
}
