import { OptionsContainerComponent } from './container/options-container/options-container.component';
import { CreateContainerComponent } from './container/create-container/create-container.component';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'create', component: CreateContainerComponent },
  { path: 'options', component: OptionsContainerComponent },
  { path: 'login', component: LoginContainerComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
];
