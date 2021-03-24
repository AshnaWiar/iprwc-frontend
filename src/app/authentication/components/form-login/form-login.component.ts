import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

import {CredentialsInterface} from '../../interfaces/credentials-interface';
import {Credentials} from '../../models/credentials';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  readonly credentials: CredentialsInterface;
  @Output() authenticateRequest: EventEmitter<CredentialsInterface>;

  constructor() {
    this.credentials = new Credentials('', '');
    this.authenticateRequest = new EventEmitter<CredentialsInterface>();
  }

  onFormSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.authenticateRequest.emit(this.credentials);
    }
  }

}
