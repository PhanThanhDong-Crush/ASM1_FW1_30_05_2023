import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project.service';

@Component( {
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ]
} )
export class ProjectDetailComponent
{
  project: IProject = {
    id: 0,
    name: "",
    price: 0
  }

  constructor ( private paramId: ActivatedRoute, private proServices: ProjectService )
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
}
