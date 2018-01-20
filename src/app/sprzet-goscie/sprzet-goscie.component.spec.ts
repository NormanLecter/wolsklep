import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetGoscieComponent } from './sprzet-goscie.component';

describe('SprzetGoscieComponent', () => {
  let component: SprzetGoscieComponent;
  let fixture: ComponentFixture<SprzetGoscieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprzetGoscieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetGoscieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
