import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
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

  schoolId: any;
  schools = [
    { id: 1, name: "Desert Hills", zipCode: "84780" },
    { id: 2, name: "Desert Hills", zipCode: "84781" },
    { id: 3, name: "Desert Hills", zipCode: "84782" },
  ];
  toolbarOn: boolean;

  constructor(private _http: Http, private _appService: AppService) { }

  ngOnInit() {
    if (localStorage.getItem("schoolId")) {
      this.schoolId = localStorage.getItem("schoolId")
    } else {
      window.navigator.geolocation.getCurrentPosition((pos) => {
        return this._http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.coords.latitude + ',' + pos.coords.longitude + '&sensor=true')
          .toPromise()
          .then((res) => {
            this.selectSchool(res.json().results[0].address_components[6].long_name.toString());
          });
      });
    };
    this.checkPosition()
  }

  selectSchool(zipCode) {
    for (let school of this.schools) {
      if (school.zipCode.includes(zipCode)) {
        localStorage.setItem("schoolId", school.id.toString());
        this.schoolId = school.id;
        return;
      }
    }
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


