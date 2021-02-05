import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomText =  lorem.sentence();
  enteredText  = '';

  ngOnInit(){
    this.randomText;
  }

  onInput(value: string){
    this.enteredText = value;
    console.log(value);
  }

}
