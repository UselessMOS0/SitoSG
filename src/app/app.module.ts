import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupComponent } from './components/group/group.component';
import { ContentComponent } from './components/services/content/content.component';
import { GalleryComponent } from './components/services/gallery/gallery.component';
import { OutletComponent } from './components/services/outlet/outlet.component';
import { ProjectComponent } from './components/services/project/project.component';
import { NavbarStickyComponent } from './components/navbar-sticky/navbar-sticky.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    GroupComponent,
    ContentComponent,
    GalleryComponent,
    OutletComponent,
    ProjectComponent,
    NavbarStickyComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
