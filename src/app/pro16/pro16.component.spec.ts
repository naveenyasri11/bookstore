/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro16Component } from './pro16.component';

describe('Pro16Component', () => {
  let component: Pro16Component;
  let fixture: ComponentFixture<Pro16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
