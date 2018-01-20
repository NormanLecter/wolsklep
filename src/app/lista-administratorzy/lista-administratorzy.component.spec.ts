import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdministratorzyComponent } from './lista-administratorzy.component';

describe('ListaAdministratorzyComponent', () => {
  let component: ListaAdministratorzyComponent;
  let fixture: ComponentFixture<ListaAdministratorzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdministratorzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdministratorzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
