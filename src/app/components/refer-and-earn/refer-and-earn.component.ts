import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-refer-and-earn',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent,
    MatButtonModule
  ],
  templateUrl: './refer-and-earn.component.html',
  styleUrl: './refer-and-earn.component.scss'
})
export class ReferAndEarnComponent {

}
