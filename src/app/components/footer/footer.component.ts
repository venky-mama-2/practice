import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FlexLayoutModule,
    FlexLayoutServerModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
