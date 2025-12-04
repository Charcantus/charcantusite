import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcciaioComponent } from './acciaio.component';

describe('AcciaioComponent', () => {
  let component: AcciaioComponent;
  let fixture: ComponentFixture<AcciaioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcciaioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcciaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
