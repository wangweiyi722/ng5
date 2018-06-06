import { Component, OnInit } from '@angular/core';
// add in the router import, gives access to router parameters
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals:any;

// Create an instance of activated route
  constructor(private route: ActivatedRoute, private router: Router,private _data: DataService) { 

  	console.log(this.route.params);
  	this.route.params.subscribe(res=>console.log(res.id));
  	
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals=res);

  }


  sendMeHome(){
  	this.router.navigate(['']);

  }
}
