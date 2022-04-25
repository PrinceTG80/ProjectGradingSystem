import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { element } from 'protractor';
import { range } from 'rxjs';
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

  async addData(data: any,time,projectTitle) {
    const totalProjectsSnapshot = await this.db
      .collection<any>('projects')
      .doc('totalProjects')
      .get()
      .toPromise();
    const totalProjects = totalProjectsSnapshot.data().projectId;
    const newUser = this.db
      .collection<any>('projects')
      .doc((totalProjects + 1).toString())
      .set({ modules : [], time : time, status : 'pending', startTime: '00:00', endTime: '00:00', timeTaken: '00:00', projectTitle: projectTitle});
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

  async getProjects() {
    this.sharedService.projects = []
    const totalProjectsSnapshot = await this.db
      .collection<any>('projects')
      .doc('totalProjects')
      .get()
      .toPromise();
    const totalProjects = totalProjectsSnapshot.data().projectId;
    this.dataCollection = this.db.collection<any>('projects');
    let snapshot: any[] = [];
    for (let i = 0; i < totalProjects; i++) {
      const element = this.dataCollection
      .doc((i + 1).toString())
      .get()
      .toPromise();
      console.log((await element).data());
      const projectex = (await element).data();
      this.sharedService.projects.push(projectex);
      snapshot.push((await element).data());
    }

    console.log(this.sharedService.projects[3]);
    // console.log(snapshot);
    // const array: any[] =[];
    // Promise.resolve(snapshot).then(val => array.push(val));
  }

  async updateData(status,i){
    this.dataCollection = this.db.collection<any>('projects', (ref) =>
      ref.where('projectTitle', '==', this.sharedService.projects[i].projectTitle)
    );
    const snapshot = await this.dataCollection.get().toPromise();
    // const time = this.sharedService.projects[i].startTime.seconds;
    // const hours = ~~((this.sharedService.projects[i].endTime.seconds/3600) - (this.sharedService.projects[i].startTime.seconds/3600)).toString();
    // const minutes = ~~((this.sharedService.projects[i].endTime.seconds%3600)/60 - (this.sharedService.projects[i].startTime.seconds%3600)/60).toString();
    // console.log(hours + ":" + minutes)
    // const timeTaken = hours + ":" + minutes
    if(status == "Started"){
      snapshot.forEach((doc) => {
        this.dataCollection.doc(doc.id).update({
          status: status,
          startTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
    } 
    // Duration t = DateTime.parse(snapshot.forEach((doc) => this.dataCollection.doc(doc.id))
    // .difference(DateTime.parse(
    //     DateFormat("H:m:s").format(DateTime.now())));
    if(status == "Complete"){
      snapshot.forEach((doc) => {
        this.dataCollection.doc(doc.id).update({
          status: status,
          endTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
      const endTime = this.db.collection<any>('projects', (ref) =>
        ref.where('projectTitle', '==', this.sharedService.projects[i].projectTitle)
      ).get().toPromise();
      endTime.then((element) => this.sharedService.projects[i].endTime);
      console.log(this.sharedService.projects[i].endTime);
      this.calculateDiff(i,this.dataCollection);
    }
  }

  async calculateDiff(i,dataCollection){
    const snapshot = await this.dataCollection.get().toPromise();
    const time = this.sharedService.projects[i].startTime.seconds;
    const hours = ~~((this.sharedService.projects[i].endTime.seconds/3600) - (this.sharedService.projects[i].startTime.seconds/3600)).toString();
    const minutes = ~~((this.sharedService.projects[i].endTime.seconds%3600)/60 - (this.sharedService.projects[i].startTime.seconds%3600)/60).toString();
    console.log(hours + ":" + minutes)
    const timeTaken = hours + ":" + minutes
    snapshot.forEach((doc) => {
      this.dataCollection.doc(doc.id).update({
        timeTaken: timeTaken,
      });
    });
    const timeTakenx = this.db.collection<any>('projects', (ref) =>
        ref.where('projectTitle', '==', this.sharedService.projects[i].projectTitle)
    ).get().toPromise();
    timeTakenx.then((element) => this.sharedService.projects[i].timeTaken);
  }

  generateReport(i){
    const splitTaken = this.sharedService.projects[i].timeTaken.split(':');
    const splitset = this.sharedService.projects[i].time.split(':');
    const diff = [];
    const factor = (this.sharedService.projects[i].modules.length) * (this.sharedService.projects[i].modules[0].module.length) * (this.sharedService.projects[i].modules[0].module[0].task.length);
    for(let j = 0;j<2;j++){
      diff.push((Number(splitset[j]) - Number(splitTaken[j])))
    }
    let grade = 0;
    for(let j = 0;j<2;j++){
        if(diff[j] < 0){
           grade = -1;
           break;
        }
        else if(diff[j] > 0){
           grade = 1;
           break;
        }
        else{
           grade = 0;
        }
     }
     this.sharedService.grade = grade * factor;
    console.log(grade * factor);
    //console.log(this.sharedService.projects[i].timeTaken,this.sharedService.projects[i].time);
  }
}
