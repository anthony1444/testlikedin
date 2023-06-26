import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeftSidebarModule } from './left-sidebar/left-sidebar.module';
import { RightSidebarModule } from './right-sidebar/right-sidebar.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LeftSidebarModule,
    RightSidebarModule
  ],
  exports: [
    LeftSidebarModule,
    RightSidebarModule
  ]
})
export class SharedModule { }
