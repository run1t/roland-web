import { CreateContainerComponent } from './container/create-container/create-container.component';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: LoginContainerComponent },
  { path: 'create', component: CreateContainerComponent },
];
