// import { AppFormsModule } from './../forms/forms.module';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    // MenuBarComponent,
    // SelectionGroupComponent,
    // FileImportComponent,
    // AlertComponent,
    // TableComponent,
    // AlertInlineComponent,
    // NumberConversionPipe,
    // HighChartComponent,
    // ChartWithGroupSelectionComponent,
    // ImiProgressBarComponent,
} from './index';
import { NgModule, ModuleWithProviders } from '@angular/core';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [
        // AppFormsModule,
        FormsModule,
        CommonModule,
        RouterModule,
        // NgbModule,
        // ChartModule,
        // MatProgressBarModule,
    ],
    providers: [],
    declarations: [
        FooterComponent,
        HeaderComponent,
        LandingComponent,
        LoginComponent,
        // MenuBarComponent,
        // SelectionGroupComponent,
        // FileImportComponent,
        // AlertComponent,
        // TableComponent,
        // AlertInlineComponent,
        // NumberConversionPipe,
        // HighChartComponent,
        // ChartWithGroupSelectionComponent,
        // ImiProgressBarComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        // SelectionGroupComponent,
        // FileImportComponent,
        // AlertComponent,
        // TableComponent,
        // AlertInlineComponent,
        // NumberConversionPipe,
        // HighChartComponent,
        // ChartWithGroupSelectionComponent,
        // ImiProgressBarComponent,
    ],
    bootstrap: []
})
// export class CommonModule { }
export class SharedModule { }
