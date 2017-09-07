import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoDetailsComponent } from './Components/PhotoDetails/photo-details.component';
import { AlbumComponent } from './Components/Album/album.component';
import { PhotoComponent } from './Components/Photo/photo.component';

@NgModule({
  declarations: [
    AppComponent, PhotoDetailsComponent, AlbumComponent, PhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
