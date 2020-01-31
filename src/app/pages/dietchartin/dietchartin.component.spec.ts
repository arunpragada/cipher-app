import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietchartinComponent } from './dietchartin.component';

describe('DietchartinComponent', () => {
  let component: DietchartinComponent;
  let fixture: ComponentFixture<DietchartinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietchartinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietchartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
