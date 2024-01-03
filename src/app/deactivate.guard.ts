import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface IDeactivateComponent{
  canExit:()=>boolean;
}
export class DeactivateGuard implements CanDeactivate <unknown> {
  canDeactivate(
    component:IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentstate: RouterStateSnapshot):  boolean {
    return component.canExit?component.canExit():false;
  }

}
