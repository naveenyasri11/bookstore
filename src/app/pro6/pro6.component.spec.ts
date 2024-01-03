/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro6Component } from './pro6.component';

describe('Pro6Component', () => {
  let component: Pro6Component;
  let fixture: ComponentFixture<Pro6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
