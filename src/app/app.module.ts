import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { NgsRevealModule } from 'ngx-scrollreveal';
import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from 'src/components/footer/footer.component';
import { Gallery } from 'src/components/gallery/gallery.component';
import { GalleryBar } from 'src/components/gallery-bar/gallery-bar.component';
import { MenuBar } from 'src/components/menu-bar/menu-bar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutMePage } from 'src/components/about-me-page/about-me-page.component';
import { RazorBlade } from 'src/components/razor-blade/razor-blade.component';
import { Title } from 'src/components/title/title.component';
import { Detail } from 'src/components/detail/detail.component';
import { Icon } from 'src/components/icon/icon.component';
import { ProjectsPage } from 'src/components/projects-page/projects-page.component';
import { MapComponent } from 'src/components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMePage,
    Detail,
    Footer,
    Gallery,
    GalleryBar,
    HomeComponent,
    Icon,
    ProjectsPage,
    MapComponent,
    MenuBar,
    RazorBlade,
    Title
  ],
  imports: [
    BrowserModule,
    NgsRevealModule,
    ParticlesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
