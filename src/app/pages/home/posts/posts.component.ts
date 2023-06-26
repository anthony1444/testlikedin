import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [

    {
      id: 1,
      author: 'Benjamin Leo',
      charge: 'Founder and CEO at Gellelio Group | Angel Investor',
      image_user: 'assets/user-1.png',
      timeElapsed: '',
      date: new Date('2023-05-25T10:30:00'),
      description:'El éxito de todos los sitios web depende de la optimización de motores de búsqueda y la estrategia de marketing digital. Si está en la primera página de todos los principales motores de búsqueda, entonces está por delante de sus competidores.',
      image: 'assets/post-image-1.png',
      likes: 75,
      comments: 22,
      shares: 40
    },
    {
      id: 2,
      author: 'Clarence George',
      charge: 'Founder and CEO at Gellelio Group | Angel Investo',
      image_user: 'assets/user-4.png',
      date: new Date('2023-05-25T11:30:00'),
      timeElapsed: '',
      description:'El éxito de todos los sitios web depende de la optimización de motores de búsqueda y la estrategia de marketing digital. Si está en la primera página de todos los principales motores de búsqueda, entonces está por delante de sus competidores.',
      image: 'assets/post-image-2.png',
      likes: 75,
      comments: 22,
      shares: 40,
    },
    {
      id: 3,
      author: 'Clarence George',
      charge: 'Founder and CEO at Gellelio Group | Angel Investo',
      image_user: 'assets/user-4.png',
      timeElapsed: '',
      date: new Date('2023-05-25T12:30:00'),
      image: 'assets/post-image-3.png',
      likes: 75,
      comments: 22,
      shares: 40
    },

  ]
  textPost: any;
  sortOrder = 'asc'; // Orden inicial ascendente




  constructor(public postService: PostService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
