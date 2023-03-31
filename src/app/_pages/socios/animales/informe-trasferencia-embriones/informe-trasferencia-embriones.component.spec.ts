import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeTrasferenciaEmbrionesComponent } from './informe-trasferencia-embriones.component';

describe('InformeTrasferenciaEmbrionesComponent', () => {
  let component: InformeTrasferenciaEmbrionesComponent;
  let fixture: ComponentFixture<InformeTrasferenciaEmbrionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeTrasferenciaEmbrionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeTrasferenciaEmbrionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
