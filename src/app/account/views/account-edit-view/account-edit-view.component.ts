import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {AccountInterface} from '../../interfaces/account-interface';

@Component({
  selector: 'app-account-edit-view',
  templateUrl: './account-edit-view.component.html',
  styleUrls: ['./account-edit-view.component.scss']
})
export class AccountEditViewComponent {

  constructor(
    private accountService: AccountService,
  ) {
  }


  updateAccount(account: AccountInterface): void {
    this.accountService.put(account).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      }
    );
  }
}
