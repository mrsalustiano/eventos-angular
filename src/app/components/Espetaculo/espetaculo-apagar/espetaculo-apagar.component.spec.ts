import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspetaculoApagarComponent } from './espetaculo-apagar.component';

describe('EspetaculoApagarComponent', () => {
  let component: EspetaculoApagarComponent;
  let fixture: ComponentFixture<EspetaculoApagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspetaculoApagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspetaculoApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
