import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing-web',
  templateUrl: './marketing-web.component.html',
  styleUrl: './marketing-web.component.css'
})
export class MarketingWebComponent {
  //
  pages = [
    {
      'url': '/Marketing',
      'text': '[MARKETING]',
    },
    {
      'url': '/ContactFormAdmin',
      'text': '[CONTACT FORM ADMIN]',
    },
  ]
}
