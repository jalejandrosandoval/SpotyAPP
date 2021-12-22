import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/Interfaces/Message.interface';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { ChatService } from 'src/app/Services/Chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  // Variables Initialization
  public _loading: boolean;
  public _message: string = "";
  public _messagesChat: IMessage[] = [];
  public _element: any;

  constructor(private _chatService: ChatService,
    public _serviceAuth: AuthService) { 
    this._loading = false;
    this.loadMessages();
    
  }

  ngOnInit(): void {
    this._element = document.getElementById('app-messages');
  }

  //
  private loadMessages(){
    this._loading = true;
    this._chatService.loadMessages().subscribe(
      (messages: IMessage[]) =>{
        this._loading = false;
        console.log(messages);
        this._messagesChat = messages;
        setTimeout(() => {
          this._element.scrollTop = this._element.scrollHeight;
        }, 20);
      }
    );
  }

  //
  public sendMessage() {
    if (this._message == "") {
      return;
    }

    this._chatService.addMessage(this._message)
      .then(() => this._message = "")
      .catch((err) => console.error(err))
  }


}
