import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { element } from 'protractor';
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
    this.dataCollection = db.collection<any>('projects');
  }

  async addData(data: any,time) {
    const totalProjectsSnapshot = await this.db
      .collection<any>('projects')
      .doc('totalProjects')
      .get()
      .toPromise();
    const totalProjects = totalProjectsSnapshot.data().projectId;
    const newUser = this.db
      .collection<any>('projects')
      .doc((totalProjects + 1).toString())
      .set({ modules : [], time : time, status : 'pending', startTime: '00:00', endTime: '00:00'});
    for (let i = 0; i < data.length; i++) {
      this.db
      .collection<any>('projects')
      .doc((totalProjects + 1).toString())
      .update({
        modules: firebase.firestore.FieldValue.arrayUnion(data[i]),
      });
    }
    
    const snapshot = this.db
      .collection<any>('projects')
      .doc('totalProjects')
      .set({ projectId: totalProjects + 1 });

  }

}
