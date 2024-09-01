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
      'url': '/Contact',
      'text': '[Contacto]',
    },
    {
      'url': '/TechInfo',
      'text': '[Especificaciones Técnicas]',
    },
    {
      'url': '/AiPrompts',
      'text': '[A.I. Prompts]',
    },
  ]
}
