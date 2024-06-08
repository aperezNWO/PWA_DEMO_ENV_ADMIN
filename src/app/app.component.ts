import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PWA_DEMO_ENV_LANDING';

  pages =[
    {
      'url' : '/Home',
      'text': '[HOME]',
    },
    {
      'url': '/Miscelaneous', 
      'text': '[MISCELANEOUS]',
    },  
    {
      'url': '/GamesWeb', 
      'text': '[GAMES]',
    },    
    {
      'url': '/AlgorithmWeb',
      'text': '[ALGORITMOS]',
    },
    {
      'url': '/FilesGenerationWeb', 
      'text': '[GENERAR ARCHIVOS]',
    },
    {
      'url' : '/AAboutWeb', 
      'text': '[ACERCA DE]',
    },    
  ];
}
