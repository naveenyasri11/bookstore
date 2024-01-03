/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro17Component } from './pro17.component';

describe('Pro17Component', () => {
  let component: Pro17Component;
  let fixture: ComponentFixture<Pro17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
