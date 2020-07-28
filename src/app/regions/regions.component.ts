import { Component, OnInit, Input } from '@angular/core';
import { RegionsService } from './../regions.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CountryDetails } from './../country-details';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { asiaData, europeData } from '../app.actions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  @Input() regions: any;
  count$: Observable<number>;
  asiaData: any;
  europeData: any;
  constructor(
    private regionService: RegionsService,
    public fb: FormBuilder,
    private store: Store<{ asiaData: any, europeData: any }>
  ) { }
  selectedRegion: string;
  countries: any;
  selectedCountry: string;
  selectedCountryDetails: CountryDetails;

  regionForm = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.regionService.AsiaData().subscribe(data => {
      this.asiaData = data;
      this.store.dispatch(asiaData(data));
    });
    this.regionService.EuropeData().subscribe(data => {
      this.europeData = data;
      this.store.dispatch(europeData(data));
    });
  }

  handleRegion(region: string) {
    this.selectedRegion = region;
    this.selectedCountry = null;
    if (this.selectedRegion === 'Europe') {
      this.countries = this.europeData.map(item => item.name);
    } else if (this.selectedRegion === 'Asia') {
      this.countries = this.asiaData.map(item => item.name);
    }
  }

  handleCountry(country: string) {
    this.selectedCountry = country;
    let countryData: any;
    if (this.selectedRegion === 'Europe') {
      countryData = this.europeData.find(item => item.name === this.selectedCountry);
    } else if (this.selectedRegion === 'Asia') {
      countryData = this.asiaData.find(item => item.name === this.selectedCountry);
    }
    this.selectedCountryDetails = {
      name: countryData.name,
      capital: countryData.capital,
      population: countryData.population,
      currencies: countryData.currencies,
      flag: countryData.flag
    };
  }
}
