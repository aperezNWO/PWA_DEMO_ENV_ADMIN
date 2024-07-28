import { Component              } from '@angular/core';
import { NgbModal               } from '@ng-bootstrap/ng-bootstrap';
import { _environment           } from '../../../../environments/environment';
import { Router                 } from '@angular/router';
import { UserInfo, UserInfoType } from '../../../_models/common/common';
import { AuthService            } from '../../../_services/config/auth.service';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: 'login-content.component.html',
  styleUrls: ['login-content.component.css']
})
export class LoginComponentContent {
  //
  username: string = '';
  password: string = '';
  // Inject NgbModal for closing modal
  constructor(public modalService: NgbModal,  
              public router: Router,
              public authService: AuthService) {
    //              
  } 
  //
  onSubmit() {
    // Implement your login logic using username and password
    console.log(`Username: ${this.username}, Password: ${this.password}`); // Example log

    // Handle form submission logic here (potentially call parent component's onSubmit)
    this.authService.userName   = this.username;
    this.authService.password   = this.password;
    this.authService.loggedUser = false;
    //
    let _usersList : UserInfo[] = [];
    //
    _environment.usersList.forEach((element: any) => {
        _usersList.push(element);
        console.log(element)
    });
    //
    const _userseDictionary: Record<string, UserInfoType> = _usersList.reduce((acc, userInfo) => {
        console.log('userInfo : ' + userInfo);
        acc[userInfo.userName] = userInfo;
        return acc;
    }, {} as Record<string, UserInfoType>);

    //
    if (_userseDictionary[this.authService.userName] != null) { 
      // MATCH PASSEWORD
      this.authService.loggedUser = (_userseDictionary[this.authService.userName].userName.toUpperCase() == this.authService.userName.toUpperCase())
                                    &&
                                    (_userseDictionary[this.authService.userName].pwd                    == this.authService.password);
      // GET FULL USER NAME
      this.authService.fullUserName = _userseDictionary[this.authService.userName].fullName;

      // GET THE ROLES FROM THE CURRENT USER
      this.authService.userRoles    = _userseDictionary[this.authService.userName].userRoles;   
    }
    //
    if (this.authService.loggedUser) {
      // SEARCH LOGGED USER ON USER LIST
      console.log('Users Dictionary Match : ' + this.authService.loggedUser);
      //
      this.modalService.dismissAll('Login attempt'); // Close modal after submit
      //
      this.router.navigateByUrl("/");
    }
  }
}