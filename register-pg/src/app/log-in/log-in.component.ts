import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  ID: string[]=[] ;
  err : string='';c : number= 0;
  username: string = "";
  blursEvent(e : any){
    this.c =e.target.value.length;
    this.username=e.target.value;
    this.ID=this.username.split('@');
    if(this.ID[1]=='company.com' || this.username.length==0){
       this.err='';
    }
    if(this.ID[1]!='company.com' && this.username.length>9){
      this.err='*Invalid user Id';
   }
  }
  constructor(private router : Router) { }
  gotoLogin(){
    this.router.navigate(['/forget']);
  }
  ngOnInit(): void {
  }

}
