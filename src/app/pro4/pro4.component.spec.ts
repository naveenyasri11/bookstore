/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro4Component } from './pro4.component';

describe('Pro4Component', () => {
  let component: Pro4Component;
  let fixture: ComponentFixture<Pro4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
