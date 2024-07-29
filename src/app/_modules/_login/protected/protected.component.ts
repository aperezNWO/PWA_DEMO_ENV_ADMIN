import { Component, TemplateRef   } from '@angular/core';
import { NgbModal                 } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal for modal
import { Router                   } from '@angular/router';
import { LoginComponentContent    } from '../login-content/login-content.component';
import { AuthService              } from '../../../_services/config/auth.service';
import { _environment             } from '../../../../environments/environment';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent {
  //
  //username: string = '';
  //password: string = '';
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
    //modalRef.componentInstance.username = this.username; // Pass initial username to modal
    //modalRef.componentInstance.password = this.password; // Pass initial password to modal (optional for pre-filling)
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
    this.router.navigateByUrl("/");
  }
}
