import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErbaComponent } from './erba.component';

describe('ErbaComponent', () => {
  let component: ErbaComponent;
  let fixture: ComponentFixture<ErbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
