import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottaComponent } from './lotta.component';

describe('LottaComponent', () => {
  let component: LottaComponent;
  let fixture: ComponentFixture<LottaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
