import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Gallery } from 'src/components/gallery/gallery.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutMePage } from 'src/components/about-me-page/about-me-page.component';
import { ProjectsPage } from 'src/components/projects-page/projects-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'gallery', component: Gallery }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
