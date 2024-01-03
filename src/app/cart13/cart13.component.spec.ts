/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart13Component } from './cart13.component';

describe('Cart13Component', () => {
  let component: Cart13Component;
  let fixture: ComponentFixture<Cart13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
