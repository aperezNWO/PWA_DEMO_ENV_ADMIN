import { Component } from '@angular/core';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: 'login-content.component.html',
  styleUrls: ['login-content.component.css']
})
export class LoginComponentContent {
  //
  username: string = '';
  password: string = '';
  //
  constructor(public modalService: NgbModal) {} // Inject NgbModal for closing modal
  //
  onSubmit() {
    // Implement your login logic using username and password
    console.log(`Username: ${this.username}, Password: ${this.password}`); // Example log
    // Handle form submission logic here (potentially call parent component's onSubmit)
    this.modalService.dismissAll('Login attempt'); // Close modal after submit
  }
}