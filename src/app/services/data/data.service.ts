import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataproviders: Observable<Object>;
  constructor(private http: HttpClient, public firestore: AngularFirestore) {}

  public getdthproviders() {
    this.getBackend().subscribe((val: any) => {
      this.dataproviders = this.http.get(val.link + 'dth-providers');
    });
  }

  public getBackend() {
    return this.firestore.doc('config/backend').valueChanges();
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
