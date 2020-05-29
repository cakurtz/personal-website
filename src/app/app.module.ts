import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from 'src/components/footer/footer.component';
import { Gallery } from 'src/components/gallery/gallery.component';
import { GalleryBar } from 'src/components/gallery-bar/gallery-bar.component';
import { MenuBar } from 'src/components/menu-bar/menu-bar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { ParticlesModule } from 'angular-particle';
import { AboutMePage } from 'src/components/about-me-page/about-me-page.component';
import { RazorBlade } from 'src/components/razor-blade/razor-blade.component';
import { Title } from 'src/components/title/title.component';
import { Detail } from 'src/components/detail/detail.component';
import { Icon } from 'src/components/icon/icon.component';
import { IconContainer } from 'src/components/icon-container/icon-container.component';
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
    IconContainer,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
