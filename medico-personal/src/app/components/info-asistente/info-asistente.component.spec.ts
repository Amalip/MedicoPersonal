import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAsistenteComponent } from './info-asistente.component';

describe('InfoAsistenteComponent', () => {
  let component: InfoAsistenteComponent;
  let fixture: ComponentFixture<InfoAsistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAsistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
