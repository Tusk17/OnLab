import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastografiaComponent } from './mastografia.component';

describe('MastografiaComponent', () => {
  let component: MastografiaComponent;
  let fixture: ComponentFixture<MastografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
