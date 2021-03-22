import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IndexTableInterface} from '../../interfaces/index-table-interface';

@Component({
  selector: 'app-resource-index-table',
  templateUrl: './resource-index-table.component.html',
  styleUrls: ['./resource-index-table.component.scss']
})
export class ResourceIndexTableComponent {

  @Input()
  resource: IndexTableInterface;

  @Output()
  onDeleteResource: EventEmitter<Array<any>>;

  @Output()
  onEditResource: EventEmitter<any>;

  @Output()
  onAddResource: EventEmitter<boolean>;

  selectedAction: string;
  private selectedObjects: Array<any>;

  constructor() {
    this.resource = {columns: [], dataObjects: []};
    this.selectedAction = '';
    this.selectedObjects = [];
    this.onDeleteResource = new EventEmitter<Array<any>>();
    this.onEditResource = new EventEmitter<any>();
    this.onAddResource = new EventEmitter<boolean>();
  }

  getRowValue(dataObject: any, column: any): any {
    return dataObject[column];
  }

  executeAction(): void {
    if (this.selectedObjects.length < 1) {
      return;
    }

    switch (this.selectedAction) {
      case 'edit':
        this.onEditResource.emit(this.selectedObjects[0]);
        break;
      case 'delete':
        this.onDeleteResource.emit(this.selectedObjects);
        break;
    }

    this.resetAction();
  }

  onAddButtonClick(): void {
    this.onAddResource.emit(true);
  }

  onObjectSelectChange(event: Event, dataObject: object): void {
    const target = event.target as any;

    if (target.checked) {
      this.selectedObjects.push(dataObject);
    } else {
      this.selectedObjects = this.selectedObjects.filter(value => !this.isEqual(value, dataObject));
    }
  }

  hasSelectedMoreThanOne(): boolean {
    return this.selectedObjects.length > 1;
  }

  isEqual(obj1: any, obj2: any): boolean {
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length !== props2.length) {
      return false;
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < props1.length; i++) {
      const prop = props1[i];
      const bothAreObjects = typeof (obj1[prop]) === 'object' && typeof (obj2[prop]) === 'object';
      if ((!bothAreObjects && (obj1[prop] !== obj2[prop]))
        || (bothAreObjects && !this.isEqual(obj1[prop], obj2[prop]))) {
        return false;
      }
    }
    return true;
  }

  private resetAction(): void {
    this.selectedAction = '';
    this.selectedObjects = [];
  }
}
