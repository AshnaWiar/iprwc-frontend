import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginCredentialsInterface} from '../../interfaces/login-credentials-interface';
import {LoginCredentials} from '../../models/login-credentials';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  readonly credentials: LoginCredentialsInterface;
  @Output() authenticateRequest: EventEmitter<LoginCredentialsInterface>;

  constructor() {
    this.credentials = new LoginCredentials('', '');
    this.authenticateRequest = new EventEmitter<LoginCredentialsInterface>();
  }

  onFormSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.authenticateRequest.emit(this.credentials);
    }
  }
}
