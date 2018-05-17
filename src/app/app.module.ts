import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms';

registerLocaleData(localeFr);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        FormsModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
