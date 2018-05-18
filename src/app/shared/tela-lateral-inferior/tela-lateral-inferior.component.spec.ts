import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLateralInferiorComponent } from './tela-lateral-inferior.component';

describe('TelaLateralInferiorComponent', () => {
  let component: TelaLateralInferiorComponent;
  let fixture: ComponentFixture<TelaLateralInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLateralInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLateralInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
