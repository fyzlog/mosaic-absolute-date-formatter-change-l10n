import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMosaicModule } from '../mosaic.module';
// tslint:disable-next-line:no-import-side-effect
import '../polyfills';

import {AbsoluteDateFormatterExample} from './absolute-date-formatter-example';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMosaicModule,
        ReactiveFormsModule
    ],
    declarations: [AbsoluteDateFormatterExample],
    bootstrap: [AbsoluteDateFormatterExample],
    providers: []
})
export class AppModule {
}
