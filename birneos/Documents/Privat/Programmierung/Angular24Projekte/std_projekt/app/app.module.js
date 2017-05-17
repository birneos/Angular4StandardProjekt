"use strict";
/**
 * Wir erstellen ein Modul und referenzieren die Komponente
 * die wir zuvor erstellt haben AppComponent
 * **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var user_module_1 = require("./user/user.module");
/* Weitere wichtige wiederkehrende hinterlegen*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, user_module_1.UserModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent] //Angular weiss nun das AppComponent eine Root-Komponente ist, 
        // bei Aufruf <app></app> in der Index.html weiss Angular nun das in der Kompoente nachsehen muss und nicht in irgendein template    
    })
], AppModule);
exports.AppModule = AppModule;
