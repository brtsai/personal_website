import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogEntryListComponent } from './blog/blog-entry-list/blog-entry-list.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogEntryFooterFlushComponent } from './blog/blog-entry/blog-entry-footer-flush/blog-entry-footer-flush.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent,
    children: [
      { path: '', component: BlogEntryListComponent, pathMatch: 'full' },
      { path: 'entry', component: BlogEntryComponent,
        children: [
          { path: 'footer-flush', component: BlogEntryFooterFlushComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
