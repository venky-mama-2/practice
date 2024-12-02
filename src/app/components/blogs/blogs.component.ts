import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  constructor(private router:Router){

  }
  goToNextPage(path:any){
    this.router.navigate([path])
  }

}
