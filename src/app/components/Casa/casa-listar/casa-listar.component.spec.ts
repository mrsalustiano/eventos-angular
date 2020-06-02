import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaListarComponent } from './casa-listar.component';

describe('CasaListarComponent', () => {
  let component: CasaListarComponent;
  let fixture: ComponentFixture<CasaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
