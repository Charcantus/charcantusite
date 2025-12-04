import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElettroComponent } from './elettro.component';

describe('ElettroComponent', () => {
  let component: ElettroComponent;
  let fixture: ComponentFixture<ElettroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElettroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElettroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
