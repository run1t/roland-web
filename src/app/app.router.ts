import { OptionsContainerComponent } from './container/options-container/options-container.component';
import { CreateContainerComponent } from './container/create-container/create-container.component';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { ListMatchContainerComponent } from './container/list-match-container/list-match-container.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/matchs', pathMatch: 'full' },
  { path: 'login', component: LoginContainerComponent },
  { path: 'matchs', component: ListMatchContainerComponent },
  { path: '',
    canActivate: [
      AuthGuardService
    ],
    children: [
      { path: 'create', component: CreateContainerComponent },
      { path: 'options', component: OptionsContainerComponent }
    ]
  }
];
