import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LiferayService} from '../../services/liferay/liferay.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  greeting: string;
  liferayContent: string;
  
  constructor(public activeRouter: ActivatedRoute, public liferay: LiferayService) {
  }

  ngOnInit() {
	  this.greeting = this.liferay.getHelloMessageFromJohn();
	  
	  //this.liferayContent =  this.liferay.getLiferayWebContent();
	  this.liferay.getLiferayWebContent().subscribe((liferayContent) => this.liferayContent = liferayContent);
  }

}
