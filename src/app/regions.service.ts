import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  europeDataURL = 'https://restcountries.eu/rest/v2/region/europe';
  asiaDataURL = 'https://restcountries.eu/rest/v2/region/asia';
   constructor(private httpClient: HttpClient) {}

  EuropeData(): Observable<any> {
    return this.httpClient.get(this.europeDataURL)
    .pipe(catchError(this.handleError));
  }

  AsiaData(): Observable<any> {
    return this.httpClient.get(this.asiaDataURL)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
