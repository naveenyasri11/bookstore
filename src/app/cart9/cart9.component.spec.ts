/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart9Component } from './cart9.component';

describe('Cart9Component', () => {
  let component: Cart9Component;
  let fixture: ComponentFixture<Cart9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
