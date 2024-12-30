import { Component, signal } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FlexLayoutServerModule } from '@ngbracket/ngx-layout/server';
import { FooterComponent } from "../footer/footer.component";
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    MenuBarComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FooterComponent,
    MatExpansionModule,
    CommonModule
],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {


  readonly panelOpenState = signal(false);

  faqs: any[] = [
    {
      question: 'What is the goal of the Kubera Scheme?',
      answer: `The scheme is designed to encourage savings and provide a high-yield, alternative
      fixed income.`
    },
    {
      question: 'How long does the Kubera Scheme last?',
      answer: 'The scheme runs for 40 months.'
    },
    {
      question: 'How often are the returns paid?',
      answer: 'Returns are paid monthly in 24 karat 999 gold.'
    },
    {
      question: 'What happens if I miss to receive my return?',
      answer: 'Please contact our support team for guidance if you miss an installment.'
    },
    {
      question: 'Can I increase my investment during the scheme?',
      answer: 'No, the initial deposit remains fixed for the 40-month period.'
    },
    {
      question: 'How do I apply for the Kubera Scheme?',
      answer: 'You can apply through our website or app, or contact us directly via email at kuberainvestor@gmail.com. Alternatively, you can visit our office for assistance.'
    },
    {
      question: 'What documents are needed to join the Kubera Scheme?',
      answer: `Basic identification documents, proof of address, and bank details are required. KYC
      will be completed through <strong>Digi Locker</strong>.`
    },
    {
      question: 'What type of gold is used for the payout?',
      answer: 'Gold of certified purity (24 karat 999) is used for payouts.'
    },
    {
      question: 'Can I refer others to the Kubera Scheme?',
      answer: 'Yes, we encourage referrals. Please contact us for details on referral benefits.'
    },
    {
      question: 'What is the customer service contact for the Kubera Scheme?',
      answer: 'You can reach us at kuberainvestor@gmail.com for any assistance.'
    },
    {
      question: 'Is there a maximum limit to how much I can invest?',
      answer: 'Investments start from ₹ 10 lakhs and can go up to ₹ 5 crores or more.'
    },
    {
      question: 'Are there any taxes on the gold payout?',
      answer: 'Taxes will apply as per government regulations.'
    },
    {
      question: 'How is the gold delivered to investors?',
      answer: 'Gold is delivered securely through our trusted partners.'
    },
    {
      question: "Can I visit Vindhya Bullion's refinery?",
      answer: 'Yes, we welcome visits. Please schedule an appointment in advance.'
    },
    {
      question: 'What makes Vindhya Bullion a trusted partner?',
      answer: 'We are RBI-regulated, NABL-certified, and uphold transparency, trust, and ethical values in all our operations.'
    },
    {
      question: 'Is there an option to receive cash instead of gold?',
      answer: 'No, the returns are paid exclusively in gold.'
    },
    {
      question: 'What happens if the gold market fluctuates?',
      answer: 'The payout value in gold remains unaffected by market fluctuations.'
    },
    {
      question: 'Can companies invest in the Kubera Scheme?',
      answer: 'Yes, both individuals and companies can invest.'
    },
    {
      question: 'What if the customer dies during the scheme?',
      answer: 'If the customer passes away, the nominee designated at the time of application will be eligible to receive the gold returns.'
    },
    {
      question: "Where can I find more information about Vindhya Bullion's schemes?",
      answer: 'For more information, visit our website or contact us directly.'
    },
  ];

}
