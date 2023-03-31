import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeTrasladoAnimalesComponent } from './informe-traslado-animales.component';

describe('InformeTrasladoAnimalesComponent', () => {
  let component: InformeTrasladoAnimalesComponent;
  let fixture: ComponentFixture<InformeTrasladoAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeTrasladoAnimalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeTrasladoAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
