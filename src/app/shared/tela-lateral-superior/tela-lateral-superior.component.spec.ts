import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLateralSuperiorComponent } from './tela-lateral-superior.component';

describe('TelaLateralSuperiorComponent', () => {
  let component: TelaLateralSuperiorComponent;
  let fixture: ComponentFixture<TelaLateralSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLateralSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLateralSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
