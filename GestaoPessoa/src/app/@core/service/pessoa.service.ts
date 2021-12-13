import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PessoaModel } from '../model/pessoaModel';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private path: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.path = 'http://localhost:51084/v1/Pessoas/';
  }

  // public insert(model: PessoaModel): Observable<any> {
  //   return this.http.post(`${this.path}CriarPessoas`, model, { headers: this.headers }).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  insert(aluno: PessoaModel): Observable<PessoaModel> {
    return this.http.post<PessoaModel>(`${this.path}CriarPessoas`, aluno, httpOptions);
  }

  public update(model: PessoaModel): Observable<any> {
    return this.http.put(`${this.path}AlterarUsuario`, model, { headers: this.headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.path}GetAll`).pipe(
      map((res: any) => {
        console.log(res)
        return res;
      })
    );
  }

  public getPessoasByNome(): Observable<any> {
    return this.http.get(`${this.path}GetPessoasByNome`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getById(id: string): Observable<any> {
    return this.http.get(`${this.path}${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public Remover(id: string): Observable<any> {
    return this.http.delete(`${this.path}${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}

}
