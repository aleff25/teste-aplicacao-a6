import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLateralEsquerdaComponent } from './tela-lateral-esquerda.component';

describe('TelaLateralEsquerdaComponent', () => {
  let component: TelaLateralEsquerdaComponent;
  let fixture: ComponentFixture<TelaLateralEsquerdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLateralEsquerdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLateralEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
