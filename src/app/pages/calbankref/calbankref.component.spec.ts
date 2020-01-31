import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalbankrefComponent } from './calbankref.component';

describe('CalbankrefComponent', () => {
  let component: CalbankrefComponent;
  let fixture: ComponentFixture<CalbankrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalbankrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalbankrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
