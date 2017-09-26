import { CreateContainerComponent } from './container/create-container/create-container.component';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginContainerComponent },
  { path: '', canActivate:[ AuthGuardService ], children: [
    { path: 'create', component: CreateContainerComponent }
  ]}
];
