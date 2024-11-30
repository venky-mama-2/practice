import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from "@ngbracket/ngx-layout/server";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

}
