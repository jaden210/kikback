import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AppService
  ]
})
export class AppComponent implements OnInit {
  
  toolbarOn: boolean;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.localStorageLookup();
    this.checkPosition()
  }

  checkPosition(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        this.toolbarOn = true;
      } else {
        this.toolbarOn = false;
      }
    });
  }
}


