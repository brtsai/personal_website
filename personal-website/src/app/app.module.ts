import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogEntryListComponent } from './blog/blog-entry-list/blog-entry-list.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogEntryFooterFlushComponent } from './blog/blog-entry/blog-entry-footer-flush/blog-entry-footer-flush.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    BlogEntryListComponent,
    BlogEntryComponent,
    BlogEntryFooterFlushComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
