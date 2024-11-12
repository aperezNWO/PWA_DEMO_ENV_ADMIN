import { Component } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})
export class DemosComponent {
  //
  pages = [
    {
      'url': '/AngularWeb',
      'text': '[ANGULAR DEMO]',
    },
    {
      'url': '/CppWeb',
      'text': '[CPP DEMO]',
    },
    {
      'url': '/NodeJsWeb',
      'text': '[NODE.JS DEMO]',
    },
    {
      'url': '/NetCoreWeb',
      'text': '[.NET CORE DEMO]',
    },
    {
      'url': '/SpringBootWeb',
      'text': '[SPRING BOOT DEMO]',
    }
  ]
}
