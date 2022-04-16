import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { SharedServiceService } from './shared-service.service';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: AngularFirestore;
  private dataCollection: AngularFirestoreCollection<any>;

  constructor(
    db: AngularFirestore,
    public sharedService: SharedServiceService
  ) { 
    this.db = db;
    this.dataCollection = db.collection<any>('users');
  }

  async addData(data: any) {
    const totalUsersSnapshot = await this.db
      .collection<any>('users')
      .doc('totalusers')
      .get()
      .toPromise();
    const totalUsers = totalUsersSnapshot.data().userId;
    const dataSend = {
      address: data.address,
      isBusiness: data.isBusiness,
      userEmail: data.userEmail,
      userId: totalUsers + 1,
      userName: data.userName,
      userPassword: data.userPassword,
      userPhone: data.userPhone,
    };
    const newUser = this.db
      .collection<any>('users')
      .doc((totalUsers + 1).toString())
      .set(dataSend);
    this.initializeUser(dataSend, totalUsers + 1, false);
    const snapshot = this.db
      .collection<any>('users')
      .doc('totalusers')
      .set({ userId: totalUsers + 1 });
    this.db
      .collection<any>('favorites')
      .doc((totalUsers + 1).toString())
      .set({ favOffers: [] });
  }

}
