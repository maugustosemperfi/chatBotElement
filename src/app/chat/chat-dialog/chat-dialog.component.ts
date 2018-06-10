import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Message[] = [];
  formValue: string;

  constructor(private chat: ChatService) { }


  ngOnInit() {
  }

  sendMessage() {
    const userMsg = new Message(this.formValue, 'user');
    this.messages.push(userMsg);

    this.chat.getResponse(this.formValue).subscribe(res => {
      const res1: any = res;
      this.formValue = '';
      this.messages.push(
        new Message(res1.result.fulfillment.speech, 'bot')
      );
    });

    this.formValue = '';
  }

}
