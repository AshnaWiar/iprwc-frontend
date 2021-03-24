import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountInterface} from '../../interfaces/account-interface';
import {Account} from '../../models/account';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss']
})
export class FormCreateAccountComponent {

  @Input()
  account: AccountInterface;

  @Input()
  isEditMode: boolean;

  @Output()
  createAccountRequest: EventEmitter<AccountInterface>;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.createAccountRequest = new EventEmitter<AccountInterface>();
    this.account = this.authenticationService.getLoggedInAccount();
    this.isEditMode = false;
  }

  onFormSubmit(createAccountForm: NgForm): void {
    if (createAccountForm.valid) {
      this.createAccountRequest.emit(this.account);
    }
  }
}
