import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RegionsService } from './regions.service';

describe('RegionsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: RegionsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [
        RegionsService
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegionsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  describe('#getEuropeData', () => {
    let expectedRegions: any;

    beforeEach(() => {
      expectedRegions = [
        {
          name: 'Albania',
          topLevelDomain: [
            '.al'
          ],
          alpha2Code: 'AL',
          alpha3Code: 'ALB',
          callingCodes: [
            '355'
          ],
          capital: 'Tirana',
          altSpellings: [
            'AL',
            'Shqipëri',
            'Shqipëria',
            'Shqipnia'
          ],
          region: 'Europe',
          subregion: 'Southern Europe',
          population: 2886026,
          latlng: [
            41,
            20
          ],
          demonym: 'Albanian',
          area: 28748,
          gini: 34.5,
          timezones: [
            'UTC+01:00'
          ],
          borders: [
            'MNE',
            'GRC',
            'MKD',
            'KOS'
          ],
          nativeName: 'Shqipëria',
          numericCode: '008',
          currencies: [
            {
              code: 'ALL',
              name: 'Albanian lek',
              symbol: 'L'
            }
          ],
          languages: [
            {
              iso639_1: 'sq',
              iso639_2: 'sqi',
              name: 'Albanian',
              nativeName: 'Shqip'
            }
          ],
          translations: {
            de: 'Albanien',
            es: 'Albania',
            fr: 'Albanie',
            ja: 'アルバニア',
            it: 'Albania',
            br: 'Albânia',
            pt: 'Albânia',
            nl: 'Albanië',
            hr: 'Albanija',
            fa: 'آلبانی'
          },
          flag: 'https://restcountries.eu/data/alb.svg',
          regionalBlocs: [
            {
              acronym: 'CEFTA',
              name: 'Central European Free Trade Agreement',
              otherAcronyms: [],
              otherNames: []
            }
          ],
          cioc: 'ALB'
        }
      ];
    });
    it('should return expected regions by calling once', () => {
      service.EuropeData().subscribe(
        reg => expect(reg).toEqual(expectedRegions, 'should return expected employees'),
        fail
      );

      const req = httpTestingController.expectOne(service.europeDataURL);
      expect(req.request.method).toEqual('GET');
    });
    it('should be OK returning no countries of Europe', () => {
      service.EuropeData().subscribe(
        reg => expect(reg.length).toEqual(0, 'should have empty regions array'),
        fail
      );

      const req = httpTestingController.expectOne(service.europeDataURL);
      req.flush([]);
    });
  });
  describe('#getAsiaData', () => {
    let expectedRegions: any;

    beforeEach(() => {
      expectedRegions = [
        {
          name: 'Albania',
          topLevelDomain: [
            '.al'
          ],
          alpha2Code: 'AL',
          alpha3Code: 'ALB',
          callingCodes: [
            '355'
          ],
          capital: 'Tirana',
          altSpellings: [
            'AL',
            'Shqipëri',
            'Shqipëria',
            'Shqipnia'
          ],
          region: 'Europe',
          subregion: 'Southern Europe',
          population: 2886026,
          latlng: [
            41,
            20
          ],
          demonym: 'Albanian',
          area: 28748,
          gini: 34.5,
          timezones: [
            'UTC+01:00'
          ],
          borders: [
            'MNE',
            'GRC',
            'MKD',
            'KOS'
          ],
          nativeName: 'Shqipëria',
          numericCode: '008',
          currencies: [
            {
              code: 'ALL',
              name: 'Albanian lek',
              symbol: 'L'
            }
          ],
          languages: [
            {
              iso639_1: 'sq',
              iso639_2: 'sqi',
              name: 'Albanian',
              nativeName: 'Shqip'
            }
          ],
          translations: {
            de: 'Albanien',
            es: 'Albania',
            fr: 'Albanie',
            ja: 'アルバニア',
            it: 'Albania',
            br: 'Albânia',
            pt: 'Albânia',
            nl: 'Albanië',
            hr: 'Albanija',
            fa: 'آلبانی'
          },
          flag: 'https://restcountries.eu/data/alb.svg',
          regionalBlocs: [
            {
              acronym: 'CEFTA',
              name: 'Central European Free Trade Agreement',
              otherAcronyms: [],
              otherNames: []
            }
          ],
          cioc: 'ALB'
        }
      ];
    });
    it('should return expected regions of Asia by calling once', () => {
      service.AsiaData().subscribe(
        reg => expect(reg).toEqual(expectedRegions, 'should return expected regions of Asia'),
        fail
      );

      const req = httpTestingController.expectOne(service.asiaDataURL);
      expect(req.request.method).toEqual('GET');
    });
    it('should be OK returning no regions of Asia', () => {
      service.AsiaData().subscribe(
        reg => expect(reg.length).toEqual(0, 'should have empty regions array'),
        fail
      );

      const req = httpTestingController.expectOne(service.asiaDataURL);
      req.flush([]);
    });
  });
});
