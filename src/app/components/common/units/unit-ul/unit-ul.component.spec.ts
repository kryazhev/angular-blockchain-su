import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitUlComponent } from './unit-ul.component';

describe('UnitUlComponent', () => {
  let component: UnitUlComponent;
  let fixture: ComponentFixture<UnitUlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitUlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
