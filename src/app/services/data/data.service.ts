import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataproviders: Observable<Object>;
  constructor(private http: HttpClient, public firestore: AngularFirestore) {}

  public getdthproviders() {
    this.getBackend().subscribe((val) => {
      this.dataproviders = this.http.get(val + 'dth-providers');
    });
  }

  public getBackend() {
    return this.firestore.doc('trending/config').valueChanges();
  }

  public getLiveTrending() {
    return this.firestore.collection('trending').valueChanges();
  }

  public getLiveData() {
    return this.firestore.collection('dth-providers').valueChanges();
  }

  public getIcons() {
    return this.firestore.doc('icons/services-tab').valueChanges();
  }
}
