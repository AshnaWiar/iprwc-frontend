import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from '../../authentication/services/authentication.service';

@Directive({
  selector: '[appAuthorized]'
})
export class AuthorizedDirective {


  constructor(
    private authenticationService: AuthenticationService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    if (this.authenticationService.isLoggedIn()) {
      this.evaluateDirective(this.authenticationService.getLoggedInAccount().role);
    }else{
      this.evaluateDirective('user');
    }
  }

  @Input() set appAuthorized(role: string) {
    this.evaluateDirective(role);
  }

  private evaluateDirective(condition: string): void {
    this.viewContainer.clear();


    if (this.authenticationService.isLoggedIn() && this.authenticationService.getLoggedInAccount().role === condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      console.log('called');
      return;
    }
  }
}
