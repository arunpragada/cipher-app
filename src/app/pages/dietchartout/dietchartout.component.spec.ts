import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietchartoutComponent } from './dietchartout.component';

describe('DietchartoutComponent', () => {
  let component: DietchartoutComponent;
  let fixture: ComponentFixture<DietchartoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietchartoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietchartoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
