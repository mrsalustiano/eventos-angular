import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteApagarComponent } from './cliente-apagar.component';

describe('ClienteApagarComponent', () => {
  let component: ClienteApagarComponent;
  let fixture: ComponentFixture<ClienteApagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteApagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteApagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
