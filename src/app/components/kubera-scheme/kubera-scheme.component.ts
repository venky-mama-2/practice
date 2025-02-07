import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-kubera-scheme',
  standalone: true,
  imports: [
        MenuBarComponent,


        FlexLayoutModule,
        FlexLayoutServerModule,
        FooterComponent,
  ],
  templateUrl: './kubera-scheme.component.html',
  styleUrl: './kubera-scheme.component.scss'
})
export class KuberaSchemeComponent {

}
