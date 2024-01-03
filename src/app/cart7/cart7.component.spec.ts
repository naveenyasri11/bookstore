/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart7Component } from './cart7.component';

describe('Cart7Component', () => {
  let component: Cart7Component;
  let fixture: ComponentFixture<Cart7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
