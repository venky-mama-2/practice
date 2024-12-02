import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-webinars',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './webinars.component.html',
  styleUrl: './webinars.component.scss'
})
export class WebinarsComponent {

}
