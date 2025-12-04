import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuioComponent } from './buio.component';

describe('BuioComponent', () => {
  let component: BuioComponent;
  let fixture: ComponentFixture<BuioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
