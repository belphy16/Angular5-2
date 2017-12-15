import { Component, OnInit } from '@angular/core';

import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform:'translateY(-75%)', offset:0}),
            style({opacity:.5, transform:'translateY(35px)', offset:.3}),
            style({opacity:1, transform:'translateY(0)', offset:1})
          ]))
        ]), {optional:true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:string = 'Add an Item';
  goalText:string = 'Goal Number 1';
  goals = ['My First Goal', 'Climb Mountain'];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;

  }

  addItem(){
    this.goals.unshift(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  vibrateTest(){
    console.log("start");
    navigator.vibrate([1000, 200, 2000, 200, 3000]);
    console.log("end");
  }

  deleteItem(i){
    this.goals.splice(i, 1);
  }

}
