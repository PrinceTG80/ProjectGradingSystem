import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateProjectPageRoutingModule } from './generate-project-routing.module';

import { GenerateProjectPage } from './generate-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateProjectPageRoutingModule
  ],
  declarations: [GenerateProjectPage]
})
export class GenerateProjectPageModule {}
