/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart18Component } from './cart18.component';

describe('Cart18Component', () => {
  let component: Cart18Component;
  let fixture: ComponentFixture<Cart18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
