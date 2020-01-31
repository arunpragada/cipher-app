import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalbankComponent } from './calbank.component';

describe('CalbankComponent', () => {
  let component: CalbankComponent;
  let fixture: ComponentFixture<CalbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
