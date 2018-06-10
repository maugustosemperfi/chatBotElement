import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ChatDialogComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ChatDialogComponent, {injector: this.injector});

    customElements.define('chat-bot', el);
  }
 }
