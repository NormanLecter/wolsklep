import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZamowienComponent } from './lista-zamowien.component';

describe('ListaZamowienComponent', () => {
  let component: ListaZamowienComponent;
  let fixture: ComponentFixture<ListaZamowienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZamowienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZamowienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
