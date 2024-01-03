/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro8Component } from './pro8.component';

describe('Pro8Component', () => {
  let component: Pro8Component;
  let fixture: ComponentFixture<Pro8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
