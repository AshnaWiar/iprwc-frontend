import {Component, OnDestroy, OnInit} from '@angular/core';
import {IndexTableInterface} from '../../../shared/interfaces/index-table-interface';
import {ProductInterface} from '../../../product/interfaces/product-interface';
import {Subscription} from 'rxjs';
import {ProductService} from '../../../product/service/product.service';
import {Product} from '../../../product/models/product';
import {AccountInterface} from '../../interfaces/account-interface';
import {Account} from '../../models/account';
import {AccountService} from '../../services/account.service';

enum Page {
  CREATE, EDIT, LIST
}

@Component({
  selector: 'app-list-accounts-view',
  templateUrl: './list-accounts-view.component.html',
  styleUrls: ['./list-accounts-view.component.scss']
})
export class ListAccountsViewComponent implements OnInit, OnDestroy {

  editableAccount: AccountInterface;
  productIndexTable: IndexTableInterface;
  currentPage: Page;

  private subscriptions: Subscription[];

  constructor(
    private accountService: AccountService
  ) {
    this.productIndexTable = {columns: ['username', 'name', 'role'], dataObjects: []};
    this.editableAccount = new Account();
    this.currentPage = Page.LIST;
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.fetchAccounts();
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


  deleteAccounts(accounts: Array<AccountInterface>): void {

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
        this.productIndexTable.dataObjects = value;
        subscription.unsubscribe();
      },
      error => {
        console.log(error);
      },
    );

    this.subscriptions.push(subscription);
  }

}
