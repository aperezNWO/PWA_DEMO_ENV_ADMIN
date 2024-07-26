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
    this.modalService.dismissAll('Login attempt'); // Close modal after submit

    //
    this.authService.loggedUser = true;
    _environment.userName   = this.username;
    _environment.password   = this.password;

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
    
    // SEARCH LOGGED USER ON USER LIST
    console.log('Users Dictionary Match' + _userseDictionary[_environment.userName]);

    // MATCH PASSEWORD

    // GET THE ROLES FROM THE CURRENT USER
    
    //
    this.router.navigateByUrl("/");
  }
}