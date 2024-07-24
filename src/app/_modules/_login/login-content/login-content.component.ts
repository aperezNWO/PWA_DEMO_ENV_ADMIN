import { Component      } from '@angular/core';
import { NgbModal       } from '@ng-bootstrap/ng-bootstrap';
import { _environment   } from '../../../../environments/environment';
import { Router         } from '@angular/router';

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
  constructor(public modalService: NgbModal,  public router: Router) {} // Inject NgbModal for closing modal
  //
  onSubmit() {
    // Implement your login logic using username and password
    console.log(`Username: ${this.username}, Password: ${this.password}`); // Example log
    // Handle form submission logic here (potentially call parent component's onSubmit)
    this.modalService.dismissAll('Login attempt'); // Close modal after submit

    //
    _environment.loggedUser = true;
    _environment.userName   = this.username;
    _environment.password   = this.password;
    
    // SEARCH LOGGED USER ON USER LIST
    //_environment.usersList.find(user  )

    // MATCH PASSEWORD

    // GET THE ROLES FROM THE CURRENT USER
    
    //
    this.router.navigateByUrl("/");
  }
}