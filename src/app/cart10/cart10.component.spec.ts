/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart10Component } from './cart10.component';

describe('Cart10Component', () => {
  let component: Cart10Component;
  let fixture: ComponentFixture<Cart10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
