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
  {
    path:"our-company",
    loadComponent: () => import('./components/our-company/our-company.component').then( c => c.OurCompanyComponent)
  },
  {
    path:"our-journey",
    loadComponent: () => import('./components/our-journey/our-journey.component').then( c => c.OurJourneyComponent)
  },
  {
    path:"terms-and-conditions",
    loadComponent: () => import('./components/terms-and-conditions/terms-and-conditions.component').then( c => c.TermsAndConditionsComponent)
  },
  {
    path:"track-my-order",
    loadComponent: () => import('./components/track-my-order/track-my-order.component').then( c => c.TrackMyOrderComponent)
  },
  {
    path:"certificate-guide",
    loadComponent: () => import('./components/certificate-guide/certificate-guide.component').then( c => c.CertificateGuideComponent)
  },
  {
    path:"scheme-guide",
    loadComponent: () => import('./components/scheme-guide/scheme-guide.component').then( c => c.SchemeGuideComponent)
  },
  {
    path:"privacy-policy",
    loadComponent: () => import('./components/privacy-policy/privacy-policy.component').then( c => c.PrivacyPolicyComponent)
  },
  {
    path:"shipping-policy",
    loadComponent: () => import('./components/shipping-policy/shipping-policy.component').then( c => c.ShippingPolicyComponent)
  },
  {
    path:"fraud-disclaimer",
    loadComponent: () => import('./components/fraud-disclaimer/fraud-disclaimer.component').then( c => c.FraudDisclaimerComponent)
  },
  {
    path:"cookies-policy",
    loadComponent: () => import('./components/cancellation-policy/cancellation-policy.component').then( c => c.CancellationPolicyComponent)
  },
  {
    path:"cancellation-policy",
    loadComponent: () => import('./components/cancellation-policy/cancellation-policy.component').then( c => c.CancellationPolicyComponent)
  }
];
