import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data/data.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(
    public route: Router,
    private http: HttpClient,
    private config: DataService,
    private firestore: AngularFirestore
  ) {}

  public go(des) {
    this.route.navigate([des]);
  }

  public support(data) {
    // this.config.getBackend().subscribe((val: any) => {
    //   this.http.post(val.link + 'support', data).subscribe((result) => {
    //     console.log(result);
    //   });
    // });
    this.firestore.collection('feedback').doc(data.mail).set(data);
  }
}
