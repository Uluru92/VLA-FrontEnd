import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonios2Component } from './testimonios2.component';

describe('Testimonios2Component', () => {
  let component: Testimonios2Component;
  let fixture: ComponentFixture<Testimonios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Testimonios2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
