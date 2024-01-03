/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart6Component } from './cart6.component';

describe('Cart6Component', () => {
  let component: Cart6Component;
  let fixture: ComponentFixture<Cart6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
