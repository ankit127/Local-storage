import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-activity',
  templateUrl: './extra-activity.component.html',
  styleUrls: ['./extra-activity.component.css'],
  template: `
  <div id="content">
    <div id="contentInside" *ngFor="let container of containers"></div>
    <button (click)="add()">Add</button>
  </div>
`,

})
export class ExtraActivityComponent implements OnInit {

containers :any= [];

constructor() { }

ngOnInit(): void {
}

addMoreDiv(){
  this.containers.push(this.containers.length);
}
}