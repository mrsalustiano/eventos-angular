import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspetaculoSalvarComponent } from './espetaculo-salvar.component';

describe('EspetaculoSalvarComponent', () => {
  let component: EspetaculoSalvarComponent;
  let fixture: ComponentFixture<EspetaculoSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspetaculoSalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspetaculoSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
