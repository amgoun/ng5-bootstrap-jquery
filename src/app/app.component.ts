import { Component } from '@angular/core';
import {OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var jQuery : any;
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    jQuery('button').click(function(){
      alert('hello iam here');
       });
  }
 }


