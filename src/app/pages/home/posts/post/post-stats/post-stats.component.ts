import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.css']
})
export class PostStatsComponent implements OnInit {
  @Input('post') post: any
  constructor() { }

  ngOnInit() {
  }

}
