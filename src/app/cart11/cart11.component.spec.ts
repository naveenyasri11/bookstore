/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart11Component } from './cart11.component';

describe('Cart11Component', () => {
  let component: Cart11Component;
  let fixture: ComponentFixture<Cart11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
