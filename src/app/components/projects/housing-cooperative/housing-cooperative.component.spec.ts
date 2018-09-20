import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingCooperativeComponent } from './housing-cooperative.component';

describe('HousingCooperativeComponent', () => {
  let component: HousingCooperativeComponent;
  let fixture: ComponentFixture<HousingCooperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingCooperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingCooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
