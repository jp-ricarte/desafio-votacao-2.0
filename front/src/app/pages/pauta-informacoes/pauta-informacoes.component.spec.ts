import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaInformacoesComponent } from './pauta-informacoes.component';

describe('PautaInformacoesComponent', () => {
  let component: PautaInformacoesComponent;
  let fixture: ComponentFixture<PautaInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PautaInformacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PautaInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
