import { Component } from '@angular/core';
import { IProject } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.scss' ]
} )
export class ProjectsComponent
{
  projects: IProject[] = []

  constructor ( private proServices: ProjectService )
  {
    this.proServices.getAllProject().subscribe( data =>
    {
      this.projects = data
    } )
  }

  RemovePro ( id: number )
  {
    this.proServices.deleteProject( id ).subscribe( () =>
    {
      const confirm = window.confirm( "Are your sure?" );
      if ( confirm )
      {
        this.projects = this.projects.filter( item => item.id !== id )
      }
    } )
  }
}
