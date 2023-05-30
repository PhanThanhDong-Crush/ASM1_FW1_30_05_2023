import { Component } from '@angular/core';
import { IProject } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project.service';

@Component( {
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
} )
export class ProjectListComponent
{
  projects: IProject[] = []

  constructor ( private proServices: ProjectService )
  {
    this.proServices.getAllProject().subscribe( data =>
    {
      this.projects = data
    } )
  }
}
