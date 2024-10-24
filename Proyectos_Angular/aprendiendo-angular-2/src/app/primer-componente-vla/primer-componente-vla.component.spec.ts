import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerComponenteVlaComponent } from './primer-componente-vla.component';

describe('PrimerComponenteVlaComponent', () => {
  let component: PrimerComponenteVlaComponent;
  let fixture: ComponentFixture<PrimerComponenteVlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerComponenteVlaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerComponenteVlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
