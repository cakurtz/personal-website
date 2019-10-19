import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from 'src/components/footer/footer.component';
import { Gallery } from 'src/components/gallery/gallery.component';
import { GalleryBar } from 'src/components/gallery-bar/gallery-bar.component';
import { MenuBar } from 'src/components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Gallery,
    GalleryBar,
    MenuBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
