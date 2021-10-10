import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagandaSlideComponent } from './propaganda-slide.component';

describe('PropagandaSlideComponent', () => {
  let component: PropagandaSlideComponent;
  let fixture: ComponentFixture<PropagandaSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropagandaSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropagandaSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
