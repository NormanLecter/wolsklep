import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaProfilComponent } from './edycja-profil.component';

describe('EdycjaProfilComponent', () => {
  let component: EdycjaProfilComponent;
  let fixture: ComponentFixture<EdycjaProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
