import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProjectPage } from './my-project.page';

const routes: Routes = [
  {
    path: '',
    component: MyProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProjectPageRoutingModule {}
