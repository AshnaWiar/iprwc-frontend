import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountInterface} from '../../../account/interfaces/account-interface';
import {AccountService} from '../../../account/services/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription} from 'rxjs';

const DEFAULT_REDIRECT = '/account/profile';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit, OnDestroy {
  hasError: boolean;
  redirect: string | null;

  private subscriptions: Subscription[];

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.redirect = DEFAULT_REDIRECT;
    this.hasError = false;
    this.subscriptions = [];
  }

  ngOnInit(): void {
    const subscription = this.route.queryParamMap.subscribe(value => {
      if (value.has('redirect')) {
        this.redirect = value.get('redirect');
      }
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  createAccount(account: AccountInterface): void {
    const subscription = this.authenticationService.register(account).subscribe(
      value => {
        this.authenticationService.setLoggedInAccount(value);
        this.router.navigate([this.redirect]);
      },
      error => {
        this.hasError = true;
      },
    );
    this.subscriptions.push(subscription);
  }

}
