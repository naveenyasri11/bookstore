/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart15Component } from './cart15.component';

describe('Cart15Component', () => {
  let component: Cart15Component;
  let fixture: ComponentFixture<Cart15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
