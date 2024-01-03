/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro11Component } from './pro11.component';

describe('Pro11Component', () => {
  let component: Pro11Component;
  let fixture: ComponentFixture<Pro11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
