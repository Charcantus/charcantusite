import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocciaComponent } from './roccia.component';

describe('RocciaComponent', () => {
  let component: RocciaComponent;
  let fixture: ComponentFixture<RocciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
