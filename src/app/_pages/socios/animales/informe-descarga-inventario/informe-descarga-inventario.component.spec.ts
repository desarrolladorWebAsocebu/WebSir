import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeDescargaInventarioComponent } from './informe-descarga-inventario.component';

describe('InformeDescargaInventarioComponent', () => {
  let component: InformeDescargaInventarioComponent;
  let fixture: ComponentFixture<InformeDescargaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeDescargaInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeDescargaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
