import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,
    public sharedService: SharedServiceService,
    public router: Router,
    public db: DatabaseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  DoRegister(name,email,password){
    this.sharedService.registerData.name = name;
    this.sharedService.registerData.email = email;
    this.sharedService.registerData.pwd = password;
    console.log(this.sharedService.registerData);
    this.db.addUser();
  }
}
