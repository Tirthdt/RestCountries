import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  countries$: Observable<any>;
  dropdownOpen: Boolean = false;
  countryRegion = 'Europe';

  constructor(public countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountriesByRegion(
      this.countryRegion
    );
  }

  changeRegion(region) {
    console.log(region);
    document.getElementById('select').innerText = region;
    this.countryRegion = region;
    this.countries$ = this.countryService.getCountriesByRegion(
      this.countryRegion
    );
    this.dropdownOpen = false;
  }

  changeName(e) {
    if (e.target.value == '') {
      this.countries$ = this.countryService.getCountriesByRegion(
        this.countryRegion
      );
    } else {
      this.countries$ = this.countryService.getCountryByName(e.target.value);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
