import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
