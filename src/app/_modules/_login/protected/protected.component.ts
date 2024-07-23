import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal for modal
import { LoginComponentContent } from '../login-content/login-content.component';


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent {
  //
  username: string = '';
  password: string = '';
  //
  modalRef : TemplateRef<any> | undefined;
  //
  constructor(private modalService: NgbModal) {

  } 
  // Inject NgbModal for modal
  openLogin() {
    const modalRef = this.modalService.open(LoginComponentContent); // Open modal with LoginComponentContent
    modalRef.componentInstance.username = this.username; // Pass initial username to modal
    modalRef.componentInstance.password = this.password; // Pass initial password to modal (optional for pre-filling)
  }

  // Handle login logic here (form submission, authentication service call, etc.)
  onSubmit() {
    // Implement your login logic using username and password
    console.log(`Username: ${this.username}, Password: ${this.password}`); // Example log
  }
}
