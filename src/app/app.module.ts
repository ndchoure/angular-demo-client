import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { MediaTypeService } from './media-type/media-type.service';
import { MediaTypeComponent } from './media-type/media-type.component';
import { MediaTypeDetailComponent } from './media-type-detail/media-type-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MediaTypeComponent,
    MediaTypeDetailComponent,
    HomeComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    MediaTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
