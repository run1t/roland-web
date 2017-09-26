
import { ApiService } from './service/api.service';
import { ROUTES } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { CreatePlayerComponent } from './component/create-player/create-player.component';

import { LoginContainerComponent } from './container/login-container/login-container.component';
import { CreateContainerComponent } from './container/create-container/create-container.component';
import { SelectComponent } from './component/select/select.component';
import { OptionsContainerComponent } from './container/options-container/options-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginComponent,
    HeaderComponent,
    CreateContainerComponent,
    CreatePlayerComponent,
    SelectComponent,
    OptionsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
