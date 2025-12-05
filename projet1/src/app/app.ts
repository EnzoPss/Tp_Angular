import { Component, signal } from '@angular/core';
import { IpService } from './service/ip';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(private http: IpService) {
    this.getIP()
  }

  title = 'Angular sans copier/coller !!!';
  ipAddress: string = 'Inconnue IP';

  getIP()
    {
      this.http.getIPAddress().subscribe((res:any)=>{
        this.ipAddress=res.ip;
      });
    }


  

}



