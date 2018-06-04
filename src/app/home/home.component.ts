import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number=0;
  btnText: string="Add an item";
  goalText: string="";
  goals=[];
  constructor() { }

  ngOnInit() {
  	this.itemCount = this.goals.length;
  }

  addItem(){
  	if(this.goalText==""){
  		window.alert("Please enter a bucketlist item");
  	}
  	else
  	{
	  	this.goals.push(this.goalText);
	  	this.goalText="";
	  	this.itemCount = this.goals.length;
  	}
  	

  }

}
