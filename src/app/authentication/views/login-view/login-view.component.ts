import {Component, OnDestroy, OnInit} from '@angular/core';
import {CredentialsInterface} from '../../interfaces/credentials-interface';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';


const DEFAULT_REDIRECT = '/account/profile';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit, OnDestroy {
  hasErrors: boolean;
  redirect: string | null;

  private subscriptions: Subscription[];

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.redirect = DEFAULT_REDIRECT;
    this.hasErrors = false;
    this.subscriptions = [];
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  ngOnInit(): void {
    const subscription = this.route.queryParamMap.subscribe(value => {
      if (value.has('redirect')) {
        this.redirect = value.get('redirect');
      }
    });

    this.subscriptions.push(subscription);
  }

  authenticate(credentials: CredentialsInterface): void {
    const subscription = this.authenticationService.login(credentials).subscribe(
      value => {
        this.hasErrors = false;
        this.router.navigate([decodeURIComponent(this.redirect as string)]);
        this.authenticationService.setLoggedInAccount(value);
      },
      error => {
        this.hasErrors = true;
      }
    );

    this.subscriptions.push(subscription);
  }

  getRedirect(): object {
    if (this.redirect !== DEFAULT_REDIRECT) {
      return {redirect: this.redirect};
    }
    return {};
  }
}
