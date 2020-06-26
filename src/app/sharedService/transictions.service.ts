import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Trans {
  id;
  date,
  orderNo,
  withdrawal,
  deposit,
  pay,
  comment
}
@Injectable({
  providedIn: 'root'
})
export class TransictionsService {

  constructor(private http: HttpClient) { }

  getTrans() {
    return this.http.get<any>('assets/trans.json')
      .toPromise()
      .then(res => <Trans[]>res.data)
      .then(data => { return data; });
  }
}
