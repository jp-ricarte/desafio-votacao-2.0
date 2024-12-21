import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaTableComponent } from './pauta-table.component';

describe('PautaTableComponent', () => {
  let component: PautaTableComponent;
  let fixture: ComponentFixture<PautaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PautaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PautaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
