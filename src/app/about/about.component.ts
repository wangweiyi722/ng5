import { Component, OnInit } from '@angular/core';
// add in the router import, gives access to router parameters
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

// Create an instance of activated route
  constructor(private route: ActivatedRoute, private router: Router) { 

  	console.log(this.route.params);
  	this.route.params.subscribe(res=>console.log(res.id));

  }

  ngOnInit() {
  }


  sendMeHome(){
  	this.router.navigate(['']);
  }
}
