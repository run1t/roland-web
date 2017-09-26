import { ROUTES } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { CreatePlayerComponent } from './component/create-player/create-player.component';

import { LoginContainerComponent } from './container/login-container/login-container.component';
import { CreateContainerComponent } from './container/create-container/create-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginComponent,
    HeaderComponent,
    CreateContainerComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
