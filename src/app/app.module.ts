import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExceptionHandler, BadResponseHandler } from './handlers/index';
import { HttpModule } from '@angular/http';
import { HttpClient, UserService } from './services/index';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [HttpClient, UserService, BadResponseHandler, ExceptionHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
