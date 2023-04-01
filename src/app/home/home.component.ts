import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employees:any
constructor(private api: BackendService){}

ngOnInit() {
  this.getdata()
}

getdata() {
  this.api.getEmployee().subscribe((res: any) => {
    console.log(res)
    this.employees = res
  })
}
}
