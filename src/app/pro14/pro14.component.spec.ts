/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro14Component } from './pro14.component';

describe('Pro14Component', () => {
  let component: Pro14Component;
  let fixture: ComponentFixture<Pro14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
