import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateProjectPage } from './generate-project.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateProjectPageRoutingModule {}
