import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { DressesComponent } from './dresses/dresses.component';
import { AccessoriesComponent } from './accessories/accessories.component';


@NgModule({
  declarations: [
    DressesComponent,
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports:[
    DressesComponent,
    AccessoriesComponent
  ]
})
export class CategoriesModule {

 }
