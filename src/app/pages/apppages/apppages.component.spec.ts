import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppagesComponent } from './apppages.component';

describe('ApppagesComponent', () => {
  let component: ApppagesComponent;
  let fixture: ComponentFixture<ApppagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
