import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-generate-project',
  templateUrl: './generate-project.page.html',
  styleUrls: ['./generate-project.page.scss'],
})
export class GenerateProjectPage implements OnInit {

  constructor(public sharedService: SharedServiceService) { }

  ngOnInit() {
  }

}
