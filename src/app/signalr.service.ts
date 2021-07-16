import { EventEmitter, Injectable } from '@angular/core'  
import { HubConnection,HubConnectionBuilder } from '@aspnet/signalr'  
import { AppSettingsService } from './appsettings.service';
  
@Injectable({
    providedIn: 'root'
  })
export class signalRService {  
  
  hubConnection: HubConnection | undefined;  
  onMessageReceived= new EventEmitter<any>();  

  constructor(private appSettingsService: AppSettingsService) { 
    appSettingsService
        .getSettings()
      .subscribe(s => this.init(s.signalrNegotiateUrl));  
  }  

  private init(signalrUrl: string) {
    this.hubConnection =  new HubConnectionBuilder()  
        .withUrl(signalrUrl) 
        .build();
    this.startConnection(); 
    this.registerEvents();   
  }
  
  private startConnection() {  
    this.hubConnection?.start().then(() => {  
      console.log('Connection started');  
    }).catch(err => {  
      console.error(err);  
      setTimeout(this.startConnection, 5000);  
    });  
  }  
  
  private registerEvents() {  
    this.hubConnection?.on('priceUpdate', (message: any) => {  
      console.log('message received:' + message);  
      this.onMessageReceived.emit(message);  
    })   
  }  
}  