import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-calculation-table',
  standalone: true,
  imports: [
        MenuBarComponent,
        FooterComponent,
        FlexLayoutModule,
        FlexLayoutServerModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule
  ],
  templateUrl: './calculation-table.component.html',
  styleUrl: './calculation-table.component.scss'
})
export class CalculationTableComponent {



  selectedValue: string | undefined;

  foods: any = [
    {value: 'first', viewValue: '5,00,000'},
    {value: 'second', viewValue: '10,00,000'},
    {value: 'third', viewValue: '15,00,000'},
    {value: 'fourth', viewValue: '20,00,000'}
  ];
}
