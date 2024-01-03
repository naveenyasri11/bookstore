/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart5Component } from './cart5.component';

describe('Cart5Component', () => {
  let component: Cart5Component;
  let fixture: ComponentFixture<Cart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
