import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriComponent } from './carri.component';

describe('CarriComponent', () => {
  let component: CarriComponent;
  let fixture: ComponentFixture<CarriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
