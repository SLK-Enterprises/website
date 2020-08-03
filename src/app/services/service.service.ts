import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(public route: Router, private http: HttpClient) {}

  public go(des) {
    this.route.navigate([des]);
  }

  public support(data) {
    this.http.post(environment.backendlink + '/support', data);
  }
}
