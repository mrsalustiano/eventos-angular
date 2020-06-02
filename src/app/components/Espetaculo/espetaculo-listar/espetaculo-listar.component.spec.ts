import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspetaculoListarComponent } from './espetaculo-listar.component';

describe('EspetaculoListarComponent', () => {
  let component: EspetaculoListarComponent;
  let fixture: ComponentFixture<EspetaculoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspetaculoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspetaculoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
