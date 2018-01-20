import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SposobKupowaniaWyborComponent } from './sposob-kupowania-wybor.component';

describe('SposobKupowaniaWyborComponent', () => {
  let component: SposobKupowaniaWyborComponent;
  let fixture: ComponentFixture<SposobKupowaniaWyborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SposobKupowaniaWyborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SposobKupowaniaWyborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
