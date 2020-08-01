import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(public route: Router) {}

  public go(des) {
    this.route.navigate([des]);
  }
}
