import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-content',
  template: '',
  styleUrl: './login-content.component.css'
})
export class LoginContentComponent {
  username: string = '';
  password: string = '';

  constructor(private modalService: NgbModal) {} // Inject NgbModal for closing modal

  onSubmit() {
    // Handle form submission logic here (potentially call parent component's onSubmit)
    //this.modalService.dismiss('Login attempt'); // Close modal after submit
  }
}
