import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalServicesComponent } from './municipal-services.component';

describe('MunicipalServicesComponent', () => {
  let component: MunicipalServicesComponent;
  let fixture: ComponentFixture<MunicipalServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
