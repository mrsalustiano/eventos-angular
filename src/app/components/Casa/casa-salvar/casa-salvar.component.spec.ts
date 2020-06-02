import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaSalvarComponent } from './casa-salvar.component';

describe('CasaSalvarComponent', () => {
  let component: CasaSalvarComponent;
  let fixture: ComponentFixture<CasaSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaSalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
