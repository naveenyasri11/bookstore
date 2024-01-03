/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro13Component } from './pro13.component';

describe('Pro13Component', () => {
  let component: Pro13Component;
  let fixture: ComponentFixture<Pro13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
