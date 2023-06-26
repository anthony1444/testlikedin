import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from './right-sidebar.component';
import { FeedComponent } from './feed/feed.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { AddsComponent } from './adds/adds.component';
import { UsefulllinksComponent } from './usefulllinks/usefulllinks.component';

@NgModule({
  declarations: [RightSidebarComponent, FeedComponent, AdvertisingComponent, AddsComponent, UsefulllinksComponent],
  imports: [
    CommonModule
  ],
  exports: [RightSidebarComponent, FeedComponent, AdvertisingComponent, AddsComponent, UsefulllinksComponent],
})
export class RightSidebarModule { }
