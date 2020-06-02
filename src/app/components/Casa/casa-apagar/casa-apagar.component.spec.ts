import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaApagarComponent } from './casa-apagar.component';

describe('CasaApagarComponent', () => {
  let component: CasaApagarComponent;
  let fixture: ComponentFixture<CasaApagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaApagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
