import { Component } from '@angular/core';

@Component({
  selector: 'app-edu-web',
  templateUrl: './edu-web.component.html',
  styleUrl: './edu-web.component.css'
})
export class EduWebComponent {
  //
  pages = [
    {
      'url': '/AngularReference',
      'text': '[ANGULAR - REFERENCE]',
    },
  ]
}
