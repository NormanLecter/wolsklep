import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamowienieComponent } from './zamowienie.component';

describe('ZamowienieComponent', () => {
  let component: ZamowienieComponent;
  let fixture: ComponentFixture<ZamowienieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZamowienieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZamowienieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
