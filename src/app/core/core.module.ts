import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSidebarngComponent } from './right-sidebarng/right-sidebarng.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RightSidebarngComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ NavbarComponent]
})
export class CoreModule { }
