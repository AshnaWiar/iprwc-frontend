import {AfterViewInit, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from '../../authentication/services/authentication.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appAuthenticated]'
})
export class AuthenticatedDirective implements OnInit, OnDestroy {

  private readonly subscriptions: Subscription[];

  constructor(
    private authenticationService: AuthenticationService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.subscriptions = [];
  }

  @Input() set appAuthenticated(isAuthenticated: boolean) {
    this.evaluateDirective(isAuthenticated);
  }

  private evaluateDirective(condition: boolean): void {
    this.viewContainer.clear();

    if (this.authenticationService.isLoggedIn() === condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
  }

  ngOnInit(): void {
    const subscription = this.authenticationService.onAuthentication().subscribe(
      loggedIn => {
        this.evaluateDirective(loggedIn);
      },
    );

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }
}
