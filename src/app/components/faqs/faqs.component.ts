import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {

}
