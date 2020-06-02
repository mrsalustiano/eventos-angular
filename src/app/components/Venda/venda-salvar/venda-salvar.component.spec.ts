import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaSalvarComponent } from './venda-salvar.component';

describe('VendaSalvarComponent', () => {
  let component: VendaSalvarComponent;
  let fixture: ComponentFixture<VendaSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaSalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
