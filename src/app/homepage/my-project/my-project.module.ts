import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProjectPageRoutingModule } from './my-project-routing.module';

import { MyProjectPage } from './my-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProjectPageRoutingModule
  ],
  declarations: [MyProjectPage]
})
export class MyProjectPageModule {}
