import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorianRecordComponent } from './historian-record.component';

describe('HistorianRecordComponent', () => {
  let component: HistorianRecordComponent;
  let fixture: ComponentFixture<HistorianRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorianRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorianRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
