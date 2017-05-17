/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { NgModule } from '@angular/core';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';

@NgModule({
    
      imports: [CommonModule],  //alle wichtigen wiederkehrende Direktiven
      declarations: [ UserComponent ],  //AppComponent registriert
      exports: [UserComponent]
})

export class UserModule{}