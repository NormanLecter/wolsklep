import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUzytkownikowComponent } from './lista-uzytkownikow.component';

describe('ListaUzytkownikowComponent', () => {
  let component: ListaUzytkownikowComponent;
  let fixture: ComponentFixture<ListaUzytkownikowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUzytkownikowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUzytkownikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
