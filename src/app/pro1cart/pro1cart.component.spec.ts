/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pro1cartComponent } from './pro1cart.component';

describe('Pro1cartComponent', () => {
  let component: Pro1cartComponent;
  let fixture: ComponentFixture<Pro1cartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pro1cartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pro1cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
