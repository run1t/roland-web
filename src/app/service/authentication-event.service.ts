import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationEventService {

  private isChange = new Subject<boolean>();

  isChange$ = this.isChange.asObservable();

  constructor() { }

  changing(isChange: boolean){
    this.isChange.next(isChange);
  }

}
