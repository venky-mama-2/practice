import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    MenuBarComponent,
    FooterComponent,
    FlexLayoutModule,
    FlexLayoutServerModule
],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
