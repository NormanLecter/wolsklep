import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzetAdminComponent } from './sprzet-admin.component';

describe('SprzetAdminComponent', () => {
  let component: SprzetAdminComponent;
  let fixture: ComponentFixture<SprzetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprzetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprzetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
