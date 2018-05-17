import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropetyComponent } from './output-propety.component';

describe('OutputPropetyComponent', () => {
  let component: OutputPropetyComponent;
  let fixture: ComponentFixture<OutputPropetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
