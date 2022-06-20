import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './categories/accessories/accessories.component';
import { DressesComponent } from './categories/dresses/dresses.component';

const routes: Routes = [
  {
    component: DressesComponent,
    path: 'dresses'
  },
  {
    component: AccessoriesComponent,
    path: 'accessories'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
