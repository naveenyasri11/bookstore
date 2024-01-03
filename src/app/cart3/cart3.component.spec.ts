/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cart3Component } from './cart3.component';

describe('Cart3Component', () => {
  let component: Cart3Component;
  let fixture: ComponentFixture<Cart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
