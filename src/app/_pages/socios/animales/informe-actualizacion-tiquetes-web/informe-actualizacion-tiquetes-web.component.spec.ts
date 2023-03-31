import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeActualizacionTiquetesWebComponent } from './informe-actualizacion-tiquetes-web.component';

describe('InformeActualizacionTiquetesWebComponent', () => {
  let component: InformeActualizacionTiquetesWebComponent;
  let fixture: ComponentFixture<InformeActualizacionTiquetesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeActualizacionTiquetesWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeActualizacionTiquetesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
