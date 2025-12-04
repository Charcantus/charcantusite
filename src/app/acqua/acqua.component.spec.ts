import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquaComponent } from './acqua.component';

describe('AcquaComponent', () => {
  let component: AcquaComponent;
  let fixture: ComponentFixture<AcquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
