import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NubePersonalComponent } from './nube-personal.component';

describe('NubePersonalComponent', () => {
  let component: NubePersonalComponent;
  let fixture: ComponentFixture<NubePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NubePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NubePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
