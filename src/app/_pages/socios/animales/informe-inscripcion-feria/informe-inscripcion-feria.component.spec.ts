import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeInscripcionFeriaComponent } from './informe-inscripcion-feria.component';

describe('InformeInscripcionFeriaComponent', () => {
  let component: InformeInscripcionFeriaComponent;
  let fixture: ComponentFixture<InformeInscripcionFeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeInscripcionFeriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeInscripcionFeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
