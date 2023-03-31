import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeReferenciasComponent } from './consulta-de-referencias.component';

describe('ConsultaDeReferenciasComponent', () => {
  let component: ConsultaDeReferenciasComponent;
  let fixture: ComponentFixture<ConsultaDeReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDeReferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDeReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
