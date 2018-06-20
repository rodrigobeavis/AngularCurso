import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberCursosCriadoComponent } from './receber-cursos-criado.component';

describe('ReceberCursosCriadoComponent', () => {
  let component: ReceberCursosCriadoComponent;
  let fixture: ComponentFixture<ReceberCursosCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberCursosCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberCursosCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
