/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro15Component } from './pro15.component';

describe('Pro15Component', () => {
  let component: Pro15Component;
  let fixture: ComponentFixture<Pro15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
