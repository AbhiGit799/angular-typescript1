import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Direction } from './direction';

import { Employee } from './employee';
import { MessageService } from './message.service';
import { Num } from './num';
import { PersonService } from './person.service';

class Abc {
  constructor() {
    console.log('abc constructor called ..');
  }
  display(name: string) {
    console.log('Hello : ' + name + 'from Abc Class');
  }
}

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'], //giving multiple css file, last one will override, left to right

  preserveWhitespaces: true, //Put comma above at end of styleUrls

  viewProviders: [Employee, Abc], //07 Feb , if we give Class here inside viewProviders then it will be load only when that component called

  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myApp43';
  age: number = 10;   //Defining type and assigning the value
  age2 = 20;
  name: string = 'AB Kumar';
  name2 = 'Ajeet Kumar';
  name3 = '';
  name4 = '';
  isdone = true;
  isdone2: boolean = false;

  num1 = 60;

  city: string;

  //Object of Employee.
  employee: {
    id: number;
    name: string;
  };

  constructor() {
    // this.age="agebd";  //Give error.
    this.age = 85;

    // this.age2="qerw";  //Give error
    this.age2 = 74;

    console.log(`Value of variable inside constructor using this.age ${this.age}`);
    console.log(`Value of variable inside constructor using this.age2 ${this.age2}`);

    //for checking type----------->typeof()

    console.log("Checking Type using typeof this.age= " + typeof this.age); //number
    console.log("Checking Type using typeof this.age2= "+ typeof this.age2); //number

    //Below code will give error.
    /*

  this.name=12;
  this.name2=233;
  this.name3=43;
  this.name4=789;

  */

    this.name = 'LPK';
    console.log(`name variable inside  constructor this.name = ${this.name}`);
    console.log(`Displaying name inside constructor = ${this.name2}`);
    console.log(`Blanking value of name3 variable = ${this.name3}`);
    console.log(`Blanking value of name3 variable = ${this.name3}`);

    // this.isdone=343;          //give error
    // this.isdone2="agee";  //this will give error

    console.log(`Checking type of boolean using typeof = ${typeof this.isdone}`); //boolean
    console.log(`Checking type of boolean using typeof = ${typeof this.isdone2}`); //boolean

    console.log(`city:String will give undefined when we use typeof without giving value = ${typeof this.city}`);

    this.sum(10, 20);

    // this.sum('10','20'); //Give error

    this.employee = {
      id: 101,
      name: 'hhh',
    };

    this.add(40, 40);

    this.show();
  }

  //Method we define outside the constructor.
  sum(n1: number, n2: number) {
    console.log(`Sum function = ${n1+n2}`);
  }

  add(a: number, b: number) {
    //let a= 40; //if we give let a it will give error.
    var a = 5;

    console.log(`Add function = ${a+b}`);
  }

  // const num8:number=98; //this will give error because class member cannot contain constant value
  //declare above statement inside function.

  //let num7 = 75; //we cannot define let variable inside class directly.
  //inside block we need to define

  show() {
    let num2 = 20;

    if (this.num1 > num2) {
      let num3 = 30;
    }

    // while(num2<num3)  //error with num3
    // {
    //   let num4=40;
    // }

    console.log(this.num1);
    console.log(num2);
    //  console.log(num3); //this line will give error.

    //  console.log(num3); //this line will give error

    let num5 = 50;

    let num6: number = 10;
    let Num6: number = 55;

    let num7: number;
    num7 = 40;

    const num8: number = 90;

    // num8=789; //this will give error.
  } 

  //Best practice to define the type
}








