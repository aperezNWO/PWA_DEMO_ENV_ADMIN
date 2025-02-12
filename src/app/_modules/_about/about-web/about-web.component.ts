import { Component } from '@angular/core';

@Component({
  selector: 'app-about-web',
  templateUrl: './about-web.component.html',
  styleUrl: './about-web.component.css'
})
export class AboutWebComponent {
  //
  pages = [
    {
      'url': '/TechInfo',
      'text': '[Especificaciones Técnicas]',
    },
    {
      'url': '/SCM',
      'text': '[Software Configuration Management]',
    }
  ]
}
