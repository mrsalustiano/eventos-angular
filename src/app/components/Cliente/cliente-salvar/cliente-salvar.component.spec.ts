import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSalvarComponent } from './cliente-salvar.component';

describe('ClienteSalvarComponent', () => {
  let component: ClienteSalvarComponent;
  let fixture: ComponentFixture<ClienteSalvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSalvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
