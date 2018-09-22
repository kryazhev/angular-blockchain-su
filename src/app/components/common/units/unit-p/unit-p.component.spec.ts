import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPComponent } from './unit-p.component';

describe('UnitPComponent', () => {
  let component: UnitPComponent;
  let fixture: ComponentFixture<UnitPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
