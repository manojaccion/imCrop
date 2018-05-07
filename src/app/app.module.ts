import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper'
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ImageCropperModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }