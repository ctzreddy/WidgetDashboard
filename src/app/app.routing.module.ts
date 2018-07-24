import { LoginComponent } from './shared/index';
import { LandingComponent } from './shared/index';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

