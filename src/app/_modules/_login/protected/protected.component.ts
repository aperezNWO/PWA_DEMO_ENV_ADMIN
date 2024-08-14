import { Component, TemplateRef   } from '@angular/core';
import { NgbModal                 } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal for modal
import { Router                   } from '@angular/router';
import { LoginComponentContent    } from '../login-content/login-content.component';
import { AuthService              } from '../../../_services/_config/auth.service';
import { _environment             } from '../../../../environments/environment';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent {
  //
  modalRef : TemplateRef<any> | undefined;
  //
  constructor(private modalService: NgbModal
            , public router : Router
            , public authService : AuthService ) 
  {
      //
  } 
  // Inject NgbModal for modal
  openLogin() {
    const modalRef                      = this.modalService.open(LoginComponentContent); // Open modal with LoginComponentContent
  }
  //
  signOut() {
    //
    this.authService.loggedUser   = false;
    this.authService.userName     = '';
    this.authService.password     = '';
    this.authService.userRoles    = '';
    this.authService.fullUserName = '';
    //
    _environment.currentUserRoles  = '';  
    //
    this.router.navigateByUrl("/");
  }
}
