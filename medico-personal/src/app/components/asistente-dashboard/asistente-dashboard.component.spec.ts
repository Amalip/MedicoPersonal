import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteDashboardComponent } from './asistente-dashboard.component';

describe('AsistenteDashboardComponent', () => {
  let component: AsistenteDashboardComponent;
  let fixture: ComponentFixture<AsistenteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
