import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-activity',
  templateUrl: './post-activity.component.html',
  styleUrls: ['./post-activity.component.css']
})
export class PostActivityComponent implements OnInit {
  @Input('post') post: any
  constructor() { }

  ngOnInit() {
  }

}
