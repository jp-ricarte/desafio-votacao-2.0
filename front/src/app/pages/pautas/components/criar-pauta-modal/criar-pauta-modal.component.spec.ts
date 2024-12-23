import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPautaModalComponent } from './criar-pauta-modal.component';

describe('CriarPautaModalComponent', () => {
  let component: CriarPautaModalComponent;
  let fixture: ComponentFixture<CriarPautaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPautaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPautaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
