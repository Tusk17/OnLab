import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayosxComponent } from './rayosx.component';

describe('RayosxComponent', () => {
  let component: RayosxComponent;
  let fixture: ComponentFixture<RayosxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayosxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayosxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
