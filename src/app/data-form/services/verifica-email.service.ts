import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient){}

  verificaEmail(email: string){
    return this.http.get('assets/dados/verificaEmail.json')
    .pipe(
      delay(3000),
      map((dados: {emails: any[]}) => dados.emails),
      map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
      map((dados: any[]) => dados.length > 0)
    );
  }
}
