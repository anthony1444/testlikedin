import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-author',
  templateUrl: './post-author.component.html',
  styleUrls: ['./post-author.component.css']
})
export class PostAuthorComponent implements OnInit {
  @Input('post') post: any
  constructor(public postService: PostService) { }

  ngOnInit() {
  }

}
