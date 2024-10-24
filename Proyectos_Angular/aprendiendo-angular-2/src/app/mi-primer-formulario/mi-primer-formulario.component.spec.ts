import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPrimerFormularioComponent } from './mi-primer-formulario.component';

describe('MiPrimerFormularioComponent', () => {
  let component: MiPrimerFormularioComponent;
  let fixture: ComponentFixture<MiPrimerFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPrimerFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiPrimerFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
