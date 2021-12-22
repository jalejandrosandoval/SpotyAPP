import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { IMessage } from 'src/app/Interfaces/Message.interface';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Variables Initialization
  private _itemsCollection: AngularFirestoreCollection<IMessage>;
  private _chats: IMessage[] = [];

  constructor(private _angularFirestore: AngularFirestore, private _serviceAuth: AuthService) {
    this._itemsCollection = _angularFirestore.collection<IMessage>('chats');
  }

  // Method for load the messages in the chat.
  public loadMessages() {
    this._itemsCollection = this._angularFirestore.collection<IMessage>('chats', ref => ref
      .orderBy('Date', 'desc')
      .limit(5)
    );

    return this._itemsCollection.valueChanges()
      .pipe(
        map(
          (messages: IMessage[]) => {
            this._chats = [];

            for (let message of messages)
              this._chats.unshift(message);

              console.log(this._chats);
            return this._chats;
          }
        )
      );
  }

  // Method for add the new message in the chat.
  public addMessage(_text: string) {
    let message: IMessage = {
      Name: this._serviceAuth._User.Name,
      Message: _text,
      Date: new Date().getTime(),
      UId: this._serviceAuth._User.UId
    }

    return this._itemsCollection.add(message);
  }

}