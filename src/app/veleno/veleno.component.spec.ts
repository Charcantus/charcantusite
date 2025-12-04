import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelenoComponent } from './veleno.component';

describe('VelenoComponent', () => {
  let component: VelenoComponent;
  let fixture: ComponentFixture<VelenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
