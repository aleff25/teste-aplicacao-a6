import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLateralDireitaComponent } from './tela-lateral-direita.component';

describe('TelaLateralDireitaComponent', () => {
  let component: TelaLateralDireitaComponent;
  let fixture: ComponentFixture<TelaLateralDireitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLateralDireitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLateralDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
