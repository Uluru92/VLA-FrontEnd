import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludandoMundoComponent } from './saludando-mundo.component';

describe('SaludandoMundoComponent', () => {
  let component: SaludandoMundoComponent;
  let fixture: ComponentFixture<SaludandoMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludandoMundoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludandoMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
