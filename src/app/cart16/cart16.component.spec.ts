/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart16Component } from './cart16.component';

describe('Cart16Component', () => {
  let component: Cart16Component;
  let fixture: ComponentFixture<Cart16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
