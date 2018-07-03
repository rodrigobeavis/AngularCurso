import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlunosGuard implements CanActivateChild{

    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log("guarda de rota filha Alunos");

        console.log(route);
        console.log(state);
        
        if (state.url.includes('editar')) {
            alert('usuário sem acesso.');
            return false;
        }
        

        return true;
    }
    
}