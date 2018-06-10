import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';


  constructor(private http: HttpClient) { }

  getResponse(msg: string) {
    const data = {
      query : msg,
      lang: 'pt-br',
      sessionId: '12345'
    };

    return this.http
      .post(`${this.baseURL}`, data, {headers: {'Authorization': `Bearer ${this.token}`}});
  }

  public getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${this.token}`);
    return headers;
  }

}
