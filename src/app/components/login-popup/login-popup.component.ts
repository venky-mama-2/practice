import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from "../footer/footer.component";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss'
})
export class LoginPopupComponent {

  selectedFlag='/images/login/india.ico';
  selectedCountryCode="+91";
  showFlags:boolean=false;
  numberOfDigits=10;
  mobileNumber="";

  flagGroup : any[] =[
    {
      name:'india',
      value:'in',
      image:"/images/login/india.ico",
      code:91,
      digits:10
    },
    {
      name: 'USA',
      value: "us",
      image: "/images/login/usa.png",
      code: "1",
      digits: 9
    },
    {
      name: 'UAE',
      value: "ae",
      image: "/images/login/uae.png",
      code: "971",
      digits: 8
    }
  ]

  displayFlags(){
    this.showFlags=true;
  }
  selectFlag(ref:any){
    this.selectedFlag=ref.image;
    this.showFlags=false;
    this.selectedCountryCode=ref.code;
    this.numberOfDigits=ref.digits;
    this.mobileNumber="";
  }


}
