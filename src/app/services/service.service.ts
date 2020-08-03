import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data/data.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(
    public route: Router,
    private http: HttpClient,
    private config: DataService
  ) {}

  public go(des) {
    this.route.navigate([des]);
  }

  public support(data) {
    this.config.getBackend().subscribe((val) => {
      this.http.post(val + 'support', data);
    });
  }
}
