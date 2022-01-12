import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesDurasYBlandasComponent } from './habilidades-duras-yblandas.component';

describe('HabilidadesDurasYBlandasComponent', () => {
  let component: HabilidadesDurasYBlandasComponent;
  let fixture: ComponentFixture<HabilidadesDurasYBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesDurasYBlandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesDurasYBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
