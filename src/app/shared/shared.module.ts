import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {ShortenpipePipe} from './shortenpipe.pipe';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ShortenpipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    ShortenpipePipe,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
