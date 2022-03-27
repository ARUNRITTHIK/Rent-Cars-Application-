import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarfeaturesComponent } from './carfeatures.component';

describe('CarfeaturesComponent', () => {
  let component: CarfeaturesComponent;
  let fixture: ComponentFixture<CarfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarfeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
