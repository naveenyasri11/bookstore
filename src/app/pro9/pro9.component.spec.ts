/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro9Component } from './pro9.component';

describe('Pro9Component', () => {
  let component: Pro9Component;
  let fixture: ComponentFixture<Pro9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
