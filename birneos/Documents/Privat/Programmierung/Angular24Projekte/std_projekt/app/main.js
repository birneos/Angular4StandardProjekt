"use strict";
//console.log("Hello World");
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Anstossen der Anwendung erfolgt in der main
 *
 * */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
