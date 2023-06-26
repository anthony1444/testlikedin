import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.module-routing';
import { FormsModule } from '@angular/forms';
import { LeftSidebarModule } from 'src/app/shared/left-sidebar/left-sidebar.module';
import { RightSidebarModule } from 'src/app/shared/right-sidebar/right-sidebar.module';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostAuthorComponent } from './posts/post/post-author/post-author.component';
import { PostStatsComponent } from './posts/post/post-stats/post-stats.component';
import { PostActivityComponent } from './posts/post/post-activity/post-activity.component';


@NgModule({
  declarations: [HomeComponent, PostsComponent, PostComponent, PostAuthorComponent, PostStatsComponent, PostActivityComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    LeftSidebarModule,
    RightSidebarModule
  ],
  exports: [HomeComponent, PostsComponent, PostComponent, PostAuthorComponent, PostStatsComponent, PostActivityComponent],
})
export class HomeModule { }
