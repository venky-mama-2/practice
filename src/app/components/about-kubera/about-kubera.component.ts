import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-about-kubera',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './about-kubera.component.html',
  styleUrl: './about-kubera.component.scss'
})
export class AboutKuberaComponent {

}
