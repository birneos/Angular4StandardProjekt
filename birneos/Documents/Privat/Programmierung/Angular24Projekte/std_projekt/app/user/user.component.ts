/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component } from '@angular/core';

@Component({
    
    selector: 'user',
    template: `
        <section>
            <header>{{name}} {{vorname}}</header>
            <p>
            loremmmm ipsum 
            </p>
        </section>
         `
})

export class UserComponent{
    
    constructor(){
        console.log('UserComponent initialisiert');
    }
    
    name:string = "Marco";
    vorname:string = "Linke";
}
