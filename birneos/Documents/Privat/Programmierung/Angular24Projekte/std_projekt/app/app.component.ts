import {Component} from "@angular/core";

@Component({
    
    selector: 'my-app',
    //template: '<h1>Hello World -coole sache</h1>',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
    /*styles: [`
    
        nav{
            color:red;
        },
        main{
            color:red;
        }
    
    `]  */ 
    
    
})

export class AppComponent{
    
    constructor(){
        
       console.log("AppComponent"); 
    }
}


