import { Component } from '@angular/core';

@Component({
  selector: 'app-config-web',
  templateUrl: './config-web.component.html',
  styleUrl: './config-web.component.css'
})
//
export class ConfigWebComponent {
  //
  pages = [
    {
      'url': '/AngularConfig',
      'text': '[ANGULAR - ENTORNOS]',
    },
    {
      'url': '/NodeJsConfig',
      'text': '[NodeJs - ENTORNOS]',
    },
  ]
}
