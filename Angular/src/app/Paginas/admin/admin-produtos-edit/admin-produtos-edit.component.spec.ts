import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutosEditComponent } from './admin-produtos-edit.component';

describe('AdminProdutosEditComponent', () => {
  let component: AdminProdutosEditComponent;
  let fixture: ComponentFixture<AdminProdutosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProdutosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
