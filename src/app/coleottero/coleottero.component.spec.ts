import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeotteroComponent } from './coleottero.component';

describe('ColeotteroComponent', () => {
  let component: ColeotteroComponent;
  let fixture: ComponentFixture<ColeotteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeotteroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeotteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
