import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import 'pepjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { DevelopmentComponent } from './development/development.component';
import { DevelopmentModule } from './development/development.module';
import { WindowRefService } from './shared/services/window-ref.service';

@NgModule({
    declarations: [
      AppComponent,
      LaboratoryComponent,
      DevelopmentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        LaboratoryModule,
        DevelopmentModule,
        AppRoutingModule
    ],
    providers: [
      WindowRefService
    ],
    bootstrap: [AppComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
