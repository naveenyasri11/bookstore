/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart14Component } from './cart14.component';

describe('Cart14Component', () => {
  let component: Cart14Component;
  let fixture: ComponentFixture<Cart14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
