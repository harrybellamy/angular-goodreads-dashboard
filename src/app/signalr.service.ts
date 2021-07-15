import { EventEmitter, Injectable } from '@angular/core'  
import { HubConnection,HubConnectionBuilder } from '@aspnet/signalr'  
  
@Injectable({
    providedIn: 'root'
  })
export class signalRService {  
  
  hubConnection: HubConnection;  
  onMessageReceived= new EventEmitter<any>();  
  
  SignalrUrl:string = "/signalr-server";

  constructor() {  
    this.hubConnection =  new HubConnectionBuilder()  
                              .withUrl(this.SignalrUrl)  
                              .build();   
    this.startConnection(); 
    this.registerEvents();   
  }  
  
  private startConnection() {  
    this.hubConnection.start().then( () => {  
      console.log('Connection started');  
    }).catch(err => {  
      console.error(err);  
      setTimeout(this.startConnection, 5000);  
    });  
  }  
  
  private registerEvents() {  
    this.hubConnection.on('priceUpdate', (message: any) => {  
      console.log('message received:' + message);  
      this.onMessageReceived.emit(message);  
    })   
  }  
}  