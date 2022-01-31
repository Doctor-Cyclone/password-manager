import {Injectable} from '@angular/core';
import {IData} from "../models/appInterface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class DataService{

  public entities$: BehaviorSubject<IData[]> = new BehaviorSubject<IData[]>([]);

  get accounts(): IData[] {
    return this.entities$.getValue();
  }

  get dataFromStorage(): IData[] {
    const lsData = localStorage.getItem('data');

    if (lsData) {
      return JSON.parse(lsData);
    } else {
      return [];
    }
  }

  constructor(){
    this.entities$.next(this.dataFromStorage);
    this.entities$.subscribe((data) => {
      localStorage.setItem('data', JSON.stringify(data));
    });
  }

  addData(item: IData){
    this.entities$.next([...this.accounts, item]);
  }
}
