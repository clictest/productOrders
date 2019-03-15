import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginapp',
  templateUrl: './loginapp.component.html',
  styleUrls: ['./loginapp.component.css']
})
export class LoginappComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['home']);
    } else {
      alert('Please Enter Username and Password');
    }
  }
  }
