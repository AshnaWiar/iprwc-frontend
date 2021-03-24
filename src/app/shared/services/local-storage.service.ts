import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public get(localStorageKey: string): string | null {
    return localStorage.getItem(localStorageKey) as string;
  }

  public getObject<T>(localStorageKey: string): T | null {
    return JSON.parse(this.get(localStorageKey) as string);
  }

  public set(localStorageKey: string, value: string): void {
    localStorage.setItem(localStorageKey, value);
  }

  public setObject(localStorageKey: string, object: any): void {
    this.set(localStorageKey, JSON.stringify(object));
  }

  remove(localStorageKey: string): void {
    localStorage.removeItem(localStorageKey);
  }
}
