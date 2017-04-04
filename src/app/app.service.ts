import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

  schoolId: any;
  schools = [
    { id: 1, name: "Desert Hills", zipCode: "84780" },
    { id: 2, name: "Desert Hills", zipCode: "84781" },
    { id: 3, name: "Desert Hills", zipCode: "84782" },
  ];

  constructor(private _http: Http,) { }

    localStorageLookup() {
      if(localStorage.getItem("schoolId")) {
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

}
