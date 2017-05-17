//console.log("Hello World");

/*
 * Anstossen der Anwendung erfolgt in der main
 * 
 * */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module'


platformBrowserDynamic().bootstrapModule(AppModule);