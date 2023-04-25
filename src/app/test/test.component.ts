import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template:` <h1 class="text-success">
    Welcome {{name}}
  </h1>
  <h2 [style.color]= "hasError ? 'red': 'blue'">This is style binding</h2>
  <input  [ngClass] = "messageClass" type="text" value="Tiyani">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Cldye" class="text-danger">
  <h3 [style.color]= "highLightColor"> Hghlighing the Color using style binding</h3>
  <h3 [ngStyle]="titleStyling">Using ng styling</h3>
  <button (click)="whenClicked()">Greet</button>
  {{greeting}}
  `
,
  styles:[`
  .text-success{color : green;}
  .text-danger{color : red;}
  .text-special{font-style : italic;}

  `]
}

)
export class TestComponent {

  public name = "Tiyani Baloyi"

  greetUser(){
    return "Hello "+this.name;
  }

  public myId = 'testId';
  public hasError = false;
  public isSpecial =true;
  public isDisabled  =false;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyling = {
    color: "purple",
    fontStyle:"italic"
  }

  public highLightColor = "orange";
  public greeting = "";
  public whenClicked(){
    console.log("Hello "+this.name);
    this.greeting = "Welcome to event Binding";
  }

}
