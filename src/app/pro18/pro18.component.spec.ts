/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro18Component } from './pro18.component';

describe('Pro18Component', () => {
  let component: Pro18Component;
  let fixture: ComponentFixture<Pro18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
