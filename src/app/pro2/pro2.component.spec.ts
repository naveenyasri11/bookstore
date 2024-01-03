/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro2Component } from './pro2.component';

describe('Pro2Component', () => {
  let component: Pro2Component;
  let fixture: ComponentFixture<Pro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
