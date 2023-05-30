import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component( {
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: [ './project-add.component.scss' ]
} )
export class ProjectAddComponent
{
  project: any = {
    name: "",
    price: 0
  }

  constructor ( private proServices: ProjectService, private router: Router ) { }

  onSubmit ()
  {
    this.proServices.addProject( this.project ).subscribe( () =>
    {
      alert( "Successfully added new" );
      this.router.navigateByUrl( "/admin/project" )
    } )
  }
}
