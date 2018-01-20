import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGwarancjeComponent } from './lista-gwarancje.component';

describe('ListaGwarancjeComponent', () => {
  let component: ListaGwarancjeComponent;
  let fixture: ComponentFixture<ListaGwarancjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGwarancjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGwarancjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
