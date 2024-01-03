/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart17Component } from './cart17.component';

describe('Cart17Component', () => {
  let component: Cart17Component;
  let fixture: ComponentFixture<Cart17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
