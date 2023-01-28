import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public name:string="";
  public username:string="";
  public password:string="";
  public email:string="";
  signdata: any[] = [];
  
  onSubmit(){
    this.signdata.push({name: this.name, username: this.username, password: this.password, email: this.email})
    
  }
}
