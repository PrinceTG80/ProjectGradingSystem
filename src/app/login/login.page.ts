import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,
    public sharedService: SharedServiceService,
    public router: Router,
    public db: DatabaseService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  async doLogin(email,password){
    await this.db.checkUser(email,password);
    console.log(this.sharedService.exists);
    if(this.sharedService.exists){
      this.router.navigateByUrl('viewpage');
    }
  }

}
