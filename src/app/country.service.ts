import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private urlEndpoint = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region) {
    return this.http.get(this.urlEndpoint + 'region/' + region);
  }

  getCountryByFullName(name) {
    return this.http.get(this.urlEndpoint + 'name/' + name + '?fullText=true');
  }

  getCountryByName(name) {
    return this.http.get(this.urlEndpoint + 'name/' + name);
  }
}
