import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  items1:any[]=[
    {
      row1Img: "/images/blogs/img1.png",
      row1Title: 'Exclusive ₹1000 Reward Awaits You on Your First Investment this August!',
      row1Description: 'We are thrilled to unveil exclusive offers tailored just for our valued investors embarking on their financial journey with us! From August 1 to 31...',
      row1Date: 'July 22, 2024',
      link:"https://www.investopedia.com/articles/basics/08/reasons-to-own-gold.asp"
    },
    {
      row1Img: "/images/blogs/img2.png",
      row1Title: 'Rise of Fintech - Making Finance Easier, Faster & Accessible',
      row1Description: 'FinTech as we know it, is not just about swiping a card or making UPI payments. It is more about digital-led innovative solutions that create tremendous value for consumers.',
      row1Date: 'Apr 25, 2023',
      link:"https://flabslis.com/blogs/nabl-accreditation"
    },
    {
      row1Img: "/images/blogs/img3.png",
      row1Title: 'NRI Accounts: Types, Benefits, Comparison: Complete Guide',
      row1Description: 'Residency Status in India: A Rundown According to the income tax rules of India, a citizen of India or a person of Indian Origin who is residing ou...',
      row1Date: 'Jun 10, 2024',
      link:"https://flabslis.com/blogs/nabl-accreditation"
    },
    {
      row1Img: "/images/blogs/img4.png",
      row1Title: 'Why is India the Investment Haven for Indians in California?',
      row1Description: 'India’s rapid economic growth positions it as a potential top-three global economy. It offers many investment opportunities for Indians in Ca...',
      row1Date: 'Apr 25, 2023',
      link:"https://flabslis.com/blogs/nabl-accreditation"
    }
  ];

  constructor(private router:Router){

  }
  goToNextPage(path:any){
    this.router.navigate([path])
  }

}
