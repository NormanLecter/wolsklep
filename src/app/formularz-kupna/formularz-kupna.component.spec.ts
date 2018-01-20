import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularzKupnaComponent } from './formularz-kupna.component';

describe('FormularzKupnaComponent', () => {
  let component: FormularzKupnaComponent;
  let fixture: ComponentFixture<FormularzKupnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularzKupnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularzKupnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
