import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprolesComponent } from './approles.component';

describe('ApprolesComponent', () => {
  let component: ApprolesComponent;
  let fixture: ComponentFixture<ApprolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
