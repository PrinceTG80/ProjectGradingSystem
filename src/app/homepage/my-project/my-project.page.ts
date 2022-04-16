import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.page.html',
  styleUrls: ['./my-project.page.scss'],
})
export class MyProjectPage implements OnInit {

  public post: any;
  public postId: number;
  public expiryHours: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.post = this.router.getCurrentNavigation().extras.state.data;
        this.postId = this.router.getCurrentNavigation().extras.state.postId;
      }
      const expirayDate = new Date(this.post.expiryDate+', '+this.post.time);
      const date = new Date();
      this.expiryHours = Math.round((expirayDate.getTime()-date.getTime())/3600000);
    });
  }

  ngOnInit(): void {
    
  }

}
