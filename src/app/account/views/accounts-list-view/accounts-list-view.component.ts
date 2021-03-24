import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountInterface} from '../../../account/interfaces/account-interface';
import {IndexTableInterface} from '../../../shared/interfaces/index-table-interface';
import {CategoryInterface} from '../../../category/interfaces/category-interface';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Account} from '../../../account/models/account';
import {AccountService} from '../../../account/services/account.service';

enum Page {
  CREATE, EDIT, LIST
}

@Component({
  selector: 'app-accounts-list-view',
  templateUrl: './accounts-list-view.component.html',
  styleUrls: ['./accounts-list-view.component.scss']
})
export class AccountsListViewComponent implements OnDestroy{

  editableAccount: AccountInterface;
  accountIndexTable: IndexTableInterface;
  currentPage: Page;

  private subscriptions: Subscription[];

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {
    this.accountIndexTable = {columns: ['firstName', 'lastName', 'username', 'role'], dataObjects: this.route.snapshot.data.accounts};
    this.editableAccount = new Account();
    this.currentPage = Page.LIST;
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isCreatePage(): boolean {
    return this.currentPage === Page.CREATE;
  }

  isEditPage(): boolean {
    return this.currentPage === Page.EDIT;
  }

  isListPage(): boolean {
    return this.currentPage === Page.LIST;
  }

  setCurrentPage(page: Page): void {
    this.currentPage = page;
  }

  showListView(): void {
    this.setCurrentPage(Page.LIST);
  }

  showEditPage(account: AccountInterface): void {
    this.editableAccount = account;
    this.setCurrentPage(Page.EDIT);
  }

  showCreateView(): void {
    this.setCurrentPage(Page.CREATE);
  }

  createAccount(account: AccountInterface): void {
    const subscription = this.accountService.store(account).subscribe(
      value => {
        this.fetchAccounts();
        this.showListView();
        subscription.unsubscribe();

      },
      error => {
        console.log(error);
      },
    );

    this.subscriptions.push(subscription);
  }

  updateAccount(account: AccountInterface): void {

    console.log(account);
    const subscription = this.accountService.put(account).subscribe(
      value => {
        this.fetchAccounts();
        this.showListView();
        subscription.unsubscribe();
      },
      error => {
        console.log(error);
      },
    );

    this.subscriptions.push(subscription);
  }


  deleteAccount(accounts: Array<AccountInterface>): void {

    accounts.forEach(p => {

      const subscription = this.accountService.delete(p.id).subscribe(
        value => {
          this.fetchAccounts();
          subscription.unsubscribe();
        },
        error => {
          console.log(error);
        },
      );

      this.subscriptions.push(subscription);
    });
  }

  private fetchAccounts(): void {
    const subscription = this.accountService.getAll().subscribe(
      value => {
        this.accountIndexTable.dataObjects = value;
        subscription.unsubscribe();
      },
      error => {
        console.log(error);
      },
    );

    this.subscriptions.push(subscription);
  }

  getNewAccount(): AccountInterface {
    return new Account();
  }
}
