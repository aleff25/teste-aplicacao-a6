import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContadorComponent } from './login-contador.component';

describe('LoginContadorComponent', () => {
  let component: LoginContadorComponent;
  let fixture: ComponentFixture<LoginContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
