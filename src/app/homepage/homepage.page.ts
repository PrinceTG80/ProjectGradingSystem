import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public sharedService: SharedServiceService,
    public router: Router,
    public db: DatabaseService) { }

  ngOnInit() {
    const statuses = this.sharedService.status;
    this.db.getProjects();
    console.log(this.sharedService.projects);
  }

  displayProjects(){
    
  }

  getPostInfo(post,i) {
    const navigationExtras: NavigationExtras = { state: {data:post , postId: this.sharedService.myPostId[i]} };
    this.router.navigate(['homepage/my-project'], navigationExtras);
  }

  getStatus(event,i){
    this.db.updateData(event.target.value,i);
    console.log(event.target.value,i);
  }

  navigateto(i){
    this.db.generateReport(i);
    console.log("navigated");
  }
}
