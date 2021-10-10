import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLojaComponent } from './navbar-loja.component';

describe('NavbarLojaComponent', () => {
  let component: NavbarLojaComponent;
  let fixture: ComponentFixture<NavbarLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
