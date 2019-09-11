import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPendenciaComponent } from './cadastrar-pendencia.component';

describe('CadastrarPendenciaComponent', () => {
  let component: CadastrarPendenciaComponent;
  let fixture: ComponentFixture<CadastrarPendenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPendenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPendenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
