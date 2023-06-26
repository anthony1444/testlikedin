import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PostService } from './posts/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  addPost() {
      this.posts.push({
        id: 2,
        author: 'Anthony Florez',
        charge: 'Software Developer at Google',
        image_user: 'assets/user-1.png',
        timeElapsed: '',
        description: this.textPost,
        image: 'assets/post-image-2.png',
        likes: 75,
        date: new Date(),
        comments: 22,
        shares: 40
      });
      this.textPost = '';
  }


  constructor(public postService: PostService){
    const timer$ = interval(10000).pipe(
      startWith(0),
      map(() => {
        return this.posts.map(post => {
          const timeElapsed = this.getTimeElapsed(post.date);
          post.timeElapsed =  timeElapsed;
          return post;
        });
      })
    );

    const subscription = timer$.subscribe(postsActualizados => {
      // console.log(postsActualizados);
    });

  }
  ngOnInit(): void {
  }


  getTimeElapsed(fechaPublicacion) {
    const ahora = Number (new Date().valueOf());
    const timeElapsed = Math.floor((ahora   - Number(fechaPublicacion.valueOf())) / 1000); // Tiempo transcurrido en segundos

    if (timeElapsed < 60) {
      return timeElapsed + ' segundos';
    } else if (timeElapsed < 3600) {
      const minutosTranscurridos = Math.floor(timeElapsed / 60);
      return minutosTranscurridos + ' minutos';
    } else {
      const horasTranscurridas = Math.floor(timeElapsed / 3600);
      return horasTranscurridas + ' horas';
    }
  }



  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortPosts();
  }

  sortPosts() {
    this.postService.posts.sort((a, b) => {
      const dateA = a.date.getTime();
      const dateB = b.date.getTime();
      if (this.sortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }
}
