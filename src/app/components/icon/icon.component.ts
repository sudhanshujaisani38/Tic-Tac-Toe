//this component just decides which icon to display according to string passed
import { Component, OnInit,Input } from '@angular/core';
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import {faPen,faTimes} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  //will be getting name from parent component
  @Input() iconName:string;

  //making aliases to make more sense when using
  penIcon=faPen;
  crossIcon=faTimes;
  circleIcon=faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
