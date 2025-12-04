import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuocoComponent } from './fuoco.component';

describe('FuocoComponent', () => {
  let component: FuocoComponent;
  let fixture: ComponentFixture<FuocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
