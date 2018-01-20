import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolySprzetComponent } from './szczegoly-sprzet.component';

describe('SzczegolySprzetComponent', () => {
  let component: SzczegolySprzetComponent;
  let fixture: ComponentFixture<SzczegolySprzetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolySprzetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolySprzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
