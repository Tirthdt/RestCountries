import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CountryService } from 'src/app/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  name = '';
  country$: Observable<any>;
  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.name = data.name;
    });
  }

  ngOnInit(): void {
    this.country$ = this.countryService
      .getCountryByFullName(this.name)
      .pipe(tap(console.log));
  }
}
