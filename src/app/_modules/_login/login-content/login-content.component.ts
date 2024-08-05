import { Component                 } from '@angular/core';
import { NgbModal                  } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators   } from '@angular/forms';
import { Router                    } from '@angular/router';
import { _environment              } from '../../../../environments/environment';
import { UserInfo, UserInfoType    } from '../../../_models/common/common';
import { AuthService               } from '../../../_services/_config/auth.service';
import { LoginInfo                 } from '../../../_models/common/common';

@Component({
  selector: 'app-login-modal-content',
  templateUrl: 'login-content.component.html',
  styleUrls: ['login-content.component.css']
})
export class LoginComponentContent {
  //
  td_model                           = new LoginInfo( 
     ""
    ,""
  );
  //
  rf_LoginForm            = this.formBuilder.group({
    P_LOGIN_NAME         : [""  , Validators.required],
    P_LOGIN_PASSWORD     : [""  , Validators.required],
  });
  //
  td_form_submit           : boolean = false;
  //
  td_textStatus            : string  = "";
  // Inject NgbModal for closing modal
  constructor(public modalService : NgbModal,  
              public router       : Router,
              public authService  : AuthService,
              public formBuilder  : FormBuilder) {
    //              
  } 
  //
  onSubmit() {
    //
    this.td_textStatus  = "";
    //
    this.td_form_submit = true;
    //
    this.authService.userName   = this.td_model.P_LOGIN_NAME;
    this.authService.password   = this.td_model.P_LOGIN_PASSWORD;
    this.authService.loggedUser = false;
    // Implement your login logic using username and password
    console.log(`Username  : ${this.td_model.P_LOGIN_NAME}, Password: ${this.td_model.P_LOGIN_PASSWORD}`); // Example log
    // Implement your login logic using username and password
    console.log(`Valid Form: ${this.td_valid_form()}`); // Example log
    //
    if ((this.td_valid_form() == false))
      return;
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
      this.authService.userRoles     = _userseDictionary[this.authService.userName].userRoles;   
      _environment.currentUserRoles  = _userseDictionary[this.authService.userName].userRoles;  
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
    else 
    {
      this.td_textStatus = "Usuario o contraseña inválidos";
    }
  }
  //
  onCancel(){
    //
    this.modalService.dismissAll('Login attempt'); // Close modal after submit
  }
  //
  onInputChange_LOGIN(event: any) {
    // Perform actions with the new value
    this.td_textStatus = "";
  }
  //
  onInputChange_PWD(event: any) {
    // Perform actions with the new value
    this.td_textStatus = "";
  }
  //
  td_valid_form() : boolean {
    return (       
        ( ( this.td_model.P_LOGIN_NAME          != "" ) && (this.td_model.P_LOGIN_NAME         !=  null) ) 
        && 
        ( ( this.td_model.P_LOGIN_PASSWORD      != "" ) && (this.td_model.P_LOGIN_PASSWORD     !=  null) ) 
    );  
  }
}