/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro5Component } from './pro5.component';

describe('Pro5Component', () => {
  let component: Pro5Component;
  let fixture: ComponentFixture<Pro5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
