import { Component, Input } from '@angular/core';
import { CountryDetails } from './../country-details';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
  @Input() country: CountryDetails;
  constructor() { }

}
