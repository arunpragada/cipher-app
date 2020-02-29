import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmicalcComponent } from './bmicalc.component';

describe('BmicalcComponent', () => {
  let component: BmicalcComponent;
  let fixture: ComponentFixture<BmicalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmicalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmicalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
