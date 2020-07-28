import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RegionsService } from './../regions.service';
import { RegionsComponent } from './regions.component';

describe('RegionsComponent', () => {
  let regionsComponent: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegionsComponent
      ],
      providers: [
        RegionsService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionsComponent);
    regionsComponent = fixture.componentInstance;
  });
});
