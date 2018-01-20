import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZakupyComponent } from './lista-zakupy.component';

describe('ListaZakupyComponent', () => {
  let component: ListaZakupyComponent;
  let fixture: ComponentFixture<ListaZakupyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZakupyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZakupyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
