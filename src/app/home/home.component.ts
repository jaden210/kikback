import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Schools } from '/schools';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    HomeService
  ]
})
export class HomeComponent implements OnInit {

  constructor(private _homeService: HomeService) { }

  scrollToBottom() {
   // window.scrollTo(0,document.body.scrollHeight);
  }

  ngOnInit() {
  }

}
