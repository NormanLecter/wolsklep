import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetDodajComponent } from './sprzet-dodaj.component';

describe('SprzetDodajComponent', () => {
  let component: SprzetDodajComponent;
  let fixture: ComponentFixture<SprzetDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprzetDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
