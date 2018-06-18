import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAccidenteComponent } from './doctor-accidente.component';

describe('DoctorAccidenteComponent', () => {
  let component: DoctorAccidenteComponent;
  let fixture: ComponentFixture<DoctorAccidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAccidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
