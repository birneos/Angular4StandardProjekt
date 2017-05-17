/**
 * Wir erstellen ein Modul und referenzieren die Komponente
 * die wir zuvor erstellt haben AppComponent
 * **/
 
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';

/* Weitere wichtige wiederkehrende hinterlegen*/

@NgModule({
    imports: [BrowserModule, UserModule], //registriere Browsermodul <-- enthält auch die Abhängigkeit CommonModul mit allen wichtigen Angular-Direktiven bspw. NgIf
    declarations: [AppComponent ],  //AppComponent registriert
    bootstrap: [AppComponent]      //Angular weiss nun das AppComponent eine Root-Komponente ist, 
                                   // bei Aufruf <app></app> in der Index.html weiss Angular nun das in der Kompoente nachsehen muss und nicht in irgendein template    
})


export class AppModule {}
