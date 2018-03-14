import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaTypeComponent } from './media-type/media-type.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'media-types', component: MediaTypeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
