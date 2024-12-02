import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
