/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart12Component } from './cart12.component';

describe('Cart12Component', () => {
  let component: Cart12Component;
  let fixture: ComponentFixture<Cart12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
