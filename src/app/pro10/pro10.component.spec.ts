/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro10Component } from './pro10.component';

describe('Pro10Component', () => {
  let component: Pro10Component;
  let fixture: ComponentFixture<Pro10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
