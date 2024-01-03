/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro7Component } from './pro7.component';

describe('Pro7Component', () => {
  let component: Pro7Component;
  let fixture: ComponentFixture<Pro7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
