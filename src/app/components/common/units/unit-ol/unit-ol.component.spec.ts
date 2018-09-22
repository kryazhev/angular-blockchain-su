import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOlComponent } from './unit-ol.component';

describe('UnitOlComponent', () => {
  let component: UnitOlComponent;
  let fixture: ComponentFixture<UnitOlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitOlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
