import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",
    loadComponent: () => import('./components/home/home.component').then( c => c.HomeComponent)
  },
  {
    path:"about-kubera",
    loadComponent: () => import('./components/about-kubera/about-kubera.component').then( c => c.AboutKuberaComponent)
  },
  {
    path:"blogs",
    loadComponent: () => import('./components/blogs/blogs.component').then( c => c.BlogsComponent)
  },
  {
    path:"webinars",
    loadComponent: () => import('./components/webinars/webinars.component').then( c => c.WebinarsComponent)
  },
  {
    path:"faqs",
    loadComponent: () => import('./components/faqs/faqs.component').then( c => c.FaqsComponent)
  },
  {
    path:"about-us",
    loadComponent: () => import('./components/about-us/about-us.component').then( c => c.AboutUsComponent)
  },
  {
    path:"contact-us",
    loadComponent: () => import('./components/contact-us/contact-us.component').then( c => c.ContactUsComponent)
  },
  {
    path:"refer-and-earn",
    loadComponent: () => import('./components/refer-and-earn/refer-and-earn.component').then( c => c.ReferAndEarnComponent)
  },
  {
    path:"login",
    loadComponent: () => import('./components/login/login.component').then( c => c.LoginComponent)
  },

];
