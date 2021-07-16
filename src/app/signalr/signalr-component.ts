import { Component, OnInit } from '@angular/core';  
  
import { signalRService } from '../signalr.service';  
  
@Component({  
  selector: 'app-signalr-test',  
  templateUrl: './signalr.component.html',  
})  
export class SignalrComponent implements OnInit {  
  prices: Map<string, number> = new Map<string, number>(); 
  constructor(private chatService: signalRService) {      
  }  
  
  ngOnInit() {  
    this.chatService.onMessageReceived.subscribe((message) => {  
      console.log(message);
      this.prices.set(message.CommodityName, message.Price);
    });  
  }   
}  