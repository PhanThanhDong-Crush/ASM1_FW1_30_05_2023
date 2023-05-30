import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProjectListComponent } from './components/client/project-list/project-list.component';
import { ProjectDetailComponent } from './components/client/project-detail/project-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProjectsComponent } from './components/admin/projects/projects.component';
import { ProjectAddComponent } from './components/admin/project-add/project-add.component';
import { ProjectEditComponent } from './components/admin/project-edit/project-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", component: ClientLayoutComponent, children: [
      { path: "", component: ProjectListComponent },
      { path: "project", component: ProjectListComponent },
      { path: "project/:id", component: ProjectDetailComponent },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "project", pathMatch: "full" },
      { path: "project", component: ProjectsComponent },
      { path: "project-add", component: ProjectAddComponent },
      { path: "project/:id/edit", component: ProjectEditComponent },
    ]
  },
  {
    path: "**", component: ClientLayoutComponent, children: [
      { path: "", component: PageNotFoundComponent }
    ]
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
