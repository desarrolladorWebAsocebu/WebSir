import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeRadicacionComponent } from './informe-radicacion.component';

describe('InformeRadicacionComponent', () => {
  let component: InformeRadicacionComponent;
  let fixture: ComponentFixture<InformeRadicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeRadicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeRadicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
