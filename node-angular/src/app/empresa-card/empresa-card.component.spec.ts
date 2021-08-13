import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCardComponent } from './empresa-card.component';

describe('EmpresaCardComponent', () => {
  let component: EmpresaCardComponent;
  let fixture: ComponentFixture<EmpresaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
