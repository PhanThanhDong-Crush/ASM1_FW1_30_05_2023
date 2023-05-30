import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project.service';

@Component( {
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: [ './project-edit.component.scss' ]
} )
export class ProjectEditComponent
{
  project: IProject = {
    id: 0,
    name: "",
    price: 0
  }

  constructor ( private paramId: ActivatedRoute, private proServices: ProjectService, private router: Router )
  {
    this.paramId.paramMap.subscribe( param =>
    {
      const id = Number( param.get( "id" ) );
      this.proServices.getOneProject( id ).subscribe( data =>
      {
        this.project = data
      } )
    } )
  }

  onSubmit ()
  {
    this.proServices.editProject( this.project ).subscribe( () =>
    {
      alert( "Update successful" );
      this.router.navigateByUrl( "/admin/project" )
    } )
  }
}
