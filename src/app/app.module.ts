import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProjectsComponent } from './components/admin/projects/projects.component';
import { ProjectAddComponent } from './components/admin/project-add/project-add.component';
import { ProjectEditComponent } from './components/admin/project-edit/project-edit.component';
import { ProjectListComponent } from './components/client/project-list/project-list.component';
import { ProjectDetailComponent } from './components/client/project-detail/project-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule( {
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
