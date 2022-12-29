import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
      SidebarComponent
  ],
  exports:[
    SidebarComponent
  ], //para que se use fuera de este archivo
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
