import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-our-journey',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent
  ],
  templateUrl: './our-journey.component.html',
  styleUrl: './our-journey.component.scss'
})
export class OurJourneyComponent {

}
