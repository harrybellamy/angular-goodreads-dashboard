import { Component, OnInit } from '@angular/core';  
  
import { signalRService } from '../signalr.service';  
  
@Component({  
  selector: 'app-signalr-test',  
  templateUrl: './signalr.component.html',  
})  
export class SignalrComponent implements OnInit {  
  price: any; 
  constructor(private chatService: signalRService) {      
  }  
  
  ngOnInit() {  
    this.chatService.onMessageReceived.subscribe((message) => {  
      this.price = message.price;
    });  
  }   
}  