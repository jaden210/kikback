import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import './rxjs-operators';

import { AppComponent } from './app.component';
import { RevStatsComponent } from './rev-stats/rev-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    RevStatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
