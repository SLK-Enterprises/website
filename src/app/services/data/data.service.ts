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
    this.dataproviders = this.http.get(
      environment.backendlink + 'dth-providers'
    );
  }

  public getLiveData() {
    return this.firestore.collection('dth-providers').valueChanges();
  }
}
