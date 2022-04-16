import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public sharedService: SharedServiceService,
    public router: Router) { }

  ngOnInit() {
  }

  getPostInfo(post,i) {
    const navigationExtras: NavigationExtras = { state: {data:post , postId: this.sharedService.myPostId[i]} };
    this.router.navigate(['homepage/my-project'], navigationExtras);
  }
}
