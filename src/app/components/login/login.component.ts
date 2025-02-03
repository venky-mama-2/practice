import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from "../footer/footer.component";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent,
    MatCardModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
