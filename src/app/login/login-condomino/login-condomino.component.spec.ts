import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCondominoComponent } from './login-condomino.component';

describe('LoginCondominoComponent', () => {
  let component: LoginCondominoComponent;
  let fixture: ComponentFixture<LoginCondominoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCondominoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCondominoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
