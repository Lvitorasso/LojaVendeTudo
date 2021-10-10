import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLojaComponent } from './footer-loja.component';

describe('FooterLojaComponent', () => {
  let component: FooterLojaComponent;
  let fixture: ComponentFixture<FooterLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
