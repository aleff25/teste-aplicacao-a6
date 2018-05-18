import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-contador',
  templateUrl: './login-contador.component.html',
  styleUrls: ['./login-contador.component.css']
})
export class LoginContadorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    print();
  }


  print() {
    console.log('ola');
  }

}
