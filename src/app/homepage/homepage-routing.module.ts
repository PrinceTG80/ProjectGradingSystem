import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage
  },
  {
    path: 'my-project',
    loadChildren: () => import('./my-project/my-project.module').then( m => m.MyProjectPageModule)
  },
  {
    path: 'add-project',
    loadChildren: () => import('./add-project/add-project.module').then( m => m.AddProjectPageModule)
  },  {
    path: 'generate-project',
    loadChildren: () => import('./generate-project/generate-project.module').then( m => m.GenerateProjectPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
