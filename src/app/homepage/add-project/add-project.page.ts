import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.page.html',
  styleUrls: ['./add-project.page.scss'],
})
export class AddProjectPage implements OnInit {

  public requestForm: FormGroup;
  isSubmitted = false;
  public arrModule = [];
  public arrTasks = [];
  public arrObjectives = [];
  public arrObjectivess = [];
  public arrTaskss = [];
  public arrModuless = [];
  public timeReqs = '00:00';
  public totalTime = '00:00';

  constructor(public formBuilder: FormBuilder,
    public sharedService: SharedServiceService,
    public router: Router,
    public db: DatabaseService) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      subcategory:['Category/'+this.sharedService.postData.category+'/'+this.sharedService.postData.subcategory],
      modules:['2'],
      tasks:['2'],
      objectives:['2'],
      title :'',
      moduleTitle:'',
      taskTitle:'',
      objectiveTitle:'',
      timeReq:'',
      description:'',
      arrModule: [this.sharedService.postData,this.sharedService.postData,this.sharedService.postData,this.sharedService.postData],
      image: File
    });
  }

  getPostInfo(post,i) {
    const navigationExtras: NavigationExtras = { state: {data:post , postId: this.sharedService.myPostId[i]} };
    this.router.navigate(['homepage/my-project'], navigationExtras);
    
  }

  printit(){
    console.log(this.requestForm.value.moduleTitle,this.requestForm.value.taskTitle);
  }

  createArrModule(sizeModule){
    this.arrModule = [];
    for(var i=0;i<sizeModule;i++){
        this.arrModule.push(this.arrTasks);
    }
  }

  createArrTasks(sizeTasks){
    this.arrTasks = [];
    for(var i=0;i<sizeTasks;i++){
        this.arrTasks.push(this.arrObjectives);
    }
  }

  createArrObjectives(sizeObjectives){
    this.arrObjectives = [];
    for(var i=0;i<sizeObjectives;i++){
        this.arrObjectives.push(this.sharedService.postData);
    }
  }

  appendObjective(objective){
    this.arrObjectivess.push(objective);
    console.log(this.arrObjectivess);
  }

  appendTask(task,time,taskName){
    this.arrTaskss.push({"taskName": taskName,"task": task, "timeReq": time});
    this.arrObjectivess = [];
    this.timeReqs = this.sharedService.addTimes(this.timeReqs,time);
    console.log(this.timeReqs);
    console.log(this.arrTaskss);
  }

  appendModule(module,moduleName){
    this.arrModuless.push({"moduleName": moduleName,"module": module, "timeModule": this.timeReqs});
    this.totalTime = this.sharedService.addTimes(this.totalTime,this.timeReqs);
    this.timeReqs = "00:00";
    this.arrTaskss = [];
    console.log(this.arrModuless);
  }

  appendProject(project,projectTitle){
    this.db.addData(project,this.totalTime);
    this.arrModuless = [];
    console.log(project, projectTitle);
  }
}
