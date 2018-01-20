import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetKlientComponent } from './sprzet-klient.component';

describe('SprzetKlientComponent', () => {
  let component: SprzetKlientComponent;
  let fixture: ComponentFixture<SprzetKlientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprzetKlientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetKlientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
