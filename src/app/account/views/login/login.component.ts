import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginCredentialsInterface} from '../../interfaces/login-credentials-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }

  authenticate(loginCredentials: LoginCredentialsInterface): void {
    this.authenticationService.login(loginCredentials).subscribe(
      account => {
        this.authenticationService.setLoggedInAccount(account);
      },
      error => {
        console.log('fail ', error);
      }
    );
  }
}
