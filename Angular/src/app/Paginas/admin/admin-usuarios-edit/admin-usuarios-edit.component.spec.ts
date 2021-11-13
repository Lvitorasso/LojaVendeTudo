import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuarioEditComponent } from './admin-usuarios-edit.component';

describe('AdminUsuarioEditComponent', () => {
  let component: AdminUsuarioEditComponent;
  let fixture: ComponentFixture<AdminUsuarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuarioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
