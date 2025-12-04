import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhiaccioComponent } from './ghiaccio.component';

describe('GhiaccioComponent', () => {
  let component: GhiaccioComponent;
  let fixture: ComponentFixture<GhiaccioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhiaccioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhiaccioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
