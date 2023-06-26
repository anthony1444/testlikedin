import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links/links.component';
import { ProfilesectionComponent } from './profilesection/profilesection.component';
import { LeftSidebarComponent } from './left-sidebar.component';

@NgModule({
  declarations: [
    LinksComponent,
    ProfilesectionComponent,
    LeftSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinksComponent,
    ProfilesectionComponent,
    LeftSidebarComponent
  ],
})
export class LeftSidebarModule { }
