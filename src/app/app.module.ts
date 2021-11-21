import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";

@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        WarningAlertComponent
    ],
    imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        HttpClientXsrfModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
