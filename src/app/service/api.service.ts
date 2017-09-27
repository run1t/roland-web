import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  postPlayer() {
    throw 'not implemented';
  }

  getMatches(){
    return this.http.get('./assets/mockMatch.json').toPromise()
  }

}
