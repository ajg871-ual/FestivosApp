import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFestivoComponent } from './detalle-festivo.component';

describe('DetalleFestivoComponent', () => {
  let component: DetalleFestivoComponent;
  let fixture: ComponentFixture<DetalleFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFestivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
