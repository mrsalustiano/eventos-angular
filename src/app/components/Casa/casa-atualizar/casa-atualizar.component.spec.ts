import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaAtualizarComponent } from './casa-atualizar.component';

describe('CasaAtualizarComponent', () => {
  let component: CasaAtualizarComponent;
  let fixture: ComponentFixture<CasaAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
