import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspetaculoAtualizarComponent } from './espetaculo-atualizar.component';

describe('EspetaculoAtualizarComponent', () => {
  let component: EspetaculoAtualizarComponent;
  let fixture: ComponentFixture<EspetaculoAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspetaculoAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspetaculoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
