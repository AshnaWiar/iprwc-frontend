import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private account = {};

  constructor(
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.accountService.get('/1').subscribe(
      value => {
        this.account = value;
      }, error => {
        console.log(error);
      });
  }

}
