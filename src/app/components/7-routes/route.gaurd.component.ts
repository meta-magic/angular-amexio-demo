import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root',
})
export class RouteGaurd implements CanActivate{

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');
        return true;
      }
}