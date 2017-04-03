import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


// Order matters here, first match wins
const appRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
