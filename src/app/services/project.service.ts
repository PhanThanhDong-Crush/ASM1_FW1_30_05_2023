import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interface/project';

@Injectable( {
  providedIn: 'root'
} )
export class ProjectService
{

  constructor ( private http: HttpClient ) { }

  getAllProject (): Observable<IProject[]>
  {
    return this.http.get<IProject[]>( `http://localhost:3000/project` );
  }

  getOneProject ( id: number ): Observable<IProject>
  {
    return this.http.get<IProject>( `http://localhost:3000/project/${ id }` );
  }
  deleteProject ( id: number ): Observable<IProject>
  {
    return this.http.delete<IProject>( `http://localhost:3000/project/${ id }` );
  }
  addProject ( project: IProject ): Observable<IProject>
  {
    return this.http.post<IProject>( `http://localhost:3000/project/`, project );
  }
  editProject ( project: IProject ): Observable<IProject>
  {
    return this.http.patch<IProject>( `http://localhost:3000/project/${ project.id }`, project );
  }
}
