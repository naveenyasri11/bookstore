/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro12Component } from './pro12.component';

describe('Pro12Component', () => {
  let component: Pro12Component;
  let fixture: ComponentFixture<Pro12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
