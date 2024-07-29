import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { GroupComponent } from './components/group/group.component';
import { ContentComponent } from './components/services/content/content.component';
import { GalleryComponent } from './components/services/gallery/gallery.component';
import { OutletComponent } from './components/services/outlet/outlet.component';
import { ProjectComponent } from './components/services/project/project.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'group', component: GroupComponent},
  {path: 'services/:$id', component: OutletComponent,
  children: [
    {path: 'gallery/:page' , component : GalleryComponent},
    {path: 'gallery/:page/project/:n_project', component : ProjectComponent},
    {path: 'content', component : ContentComponent},
    {path:'**',redirectTo:'content',pathMatch: 'full'}
  ]
  },
  {path:'**',redirectTo:'/',pathMatch: 'full'}
];


export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
  
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }