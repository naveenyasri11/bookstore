/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart8Component } from './cart8.component';

describe('Cart8Component', () => {
  let component: Cart8Component;
  let fixture: ComponentFixture<Cart8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
