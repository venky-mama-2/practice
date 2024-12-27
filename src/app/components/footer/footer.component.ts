import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Router } from '@angular/router';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FlexLayoutModule,
    FlexLayoutServerModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router:Router){

  }
  goToNextpage(path:any){
    this.router.navigate([path])
  }

}
