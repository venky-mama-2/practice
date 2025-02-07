import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-our-company',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent
  ],
  templateUrl: './our-company.component.html',
  styleUrl: './our-company.component.scss'
})
export class OurCompanyComponent {

}
