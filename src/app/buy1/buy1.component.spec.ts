/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Buy1Component } from './buy1.component';

describe('Buy1Component', () => {
  let component: Buy1Component;
  let fixture: ComponentFixture<Buy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
