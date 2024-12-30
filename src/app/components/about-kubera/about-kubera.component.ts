import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from "../footer/footer.component";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-about-kubera',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent,
    MatButtonModule
],
  templateUrl: './about-kubera.component.html',
  styleUrl: './about-kubera.component.scss'
})
export class AboutKuberaComponent {

}
