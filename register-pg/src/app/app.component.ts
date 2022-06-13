import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // constructor(private router: Router){}
 // gotoLogin(){
 //   this.router.navigate(['/login']);
 // }
 titile='register page';
  myusername: string = "";
  username: string = "";
  ID: string[]=[] ;
  mail : string="company.com"
  err : string='';c : number= 0;ca :number =0;i:number =0;s:number =0;a :number =0;
  in :number =0;
  but:boolean=false;
  blurEvent(e:any){
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
   password : string='';
   passerr : string ='';
   sarr: String='';
    blursEvent(er:any){
      this.password=er.target.value;
      this.sarr=<String>this.password;
  
      for(this.in=0;this.in<this.sarr.length;this.in++)
      {
        if(this.sarr[this.in]>="0" && this.sarr[this.in]<="9")
        {
          this.i++;
        }
        if(this.sarr[this.in]>='A' && this.sarr[this.in]<='Z')
        {
          this.ca++;
        }
        if(this.sarr[this.in]>='a' && this.sarr[this.in]<='z')
        {
          this.a++;
        }
        if((this.sarr[this.in]>='!' && this.sarr[this.in]<'0')||(this.sarr[this.in]>=':' && this.sarr[this.in]<='@')||(this.sarr[this.in]>='[' && this.sarr[this.in]<='`') ||(this.sarr[this.in]>='{' && this.sarr[this.in]<='~'))
        {
          this.s++;
        }
      }
if(this.password.length<8)
{
  this.passerr='*The password should contain atleast 8 characters';
}
else { if(this.i==0)
{
  this.passerr='*please include integers in password';
}
else {if(this.ca==0)
{
  this.passerr='*please include capital alfabets in password';
}
else {if(this.a==0)
{
  this.passerr='*please include lowercase alfabets in password';
}
else {if(this.s==0)
{
  this.passerr='*please include special characters in password';
}
else
{
  this.passerr='';
}
}
}
}
    }
  }
    password1:string='';
    error1 :string='';
    blurssEvent(ers:any){
      this.password1=ers.target.value;
      if (this.password1!=this.password) {
        this.error1='*Entered password dont match with above password'
      }
      if (this.password1==this.password) {
        this.error1=''
      }
      if(this.passerr=='' && this.error1=='' && this.err=='')
      {
        this.but=false;
      }
    }

    }
      