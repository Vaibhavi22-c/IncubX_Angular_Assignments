import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressesComponent } from './dresses/dresses.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
  { path: 'Dresses', component:DressesComponent},
  { path: 'Accessories', component:AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
