import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  //
  pages = [
    {
      'url': '/AngularFeaturesPages',
      'text': '[ANGULAR - DEMOS / CARACTERISTICAS]',
    },
  ]
  constructor(){
    //
  }
}
