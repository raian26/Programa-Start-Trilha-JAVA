import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarinhoRoutingModule } from './carinho-routing.module';
import { CarinhoComponent } from './carinho.component';


@NgModule({
  declarations: [
    CarinhoComponent
  ],
  imports: [
    CommonModule,
    CarinhoRoutingModule
  ]
})
export class CarinhoModule { }
