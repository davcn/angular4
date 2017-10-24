import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() { 
  	console.log('constructor ran...');
  }


  ngOnInit() {
  	console.log('ngInit ran...');
  	this.name = 'Kevin Smith';
    this.email = 'pepe@pepe.com';
    this.age = 29;
    this.address = {
      street: '50 Main St',
      city: 'Elche',
      country: 'Spain'
    }
    this.hobbies = ['Movies', 'Running', 'Drinking'];
    this.hello = 1;
  }

  onClick() {
    alert(1);
  }

}

interface Address {
  street:string,
  city:string,
  country:string
}