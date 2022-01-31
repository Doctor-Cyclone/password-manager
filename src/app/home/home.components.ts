import {Component} from "@angular/core";
import {DataService} from "../services/data.service";
import {IData} from "../models/appInterface";
import {Observable} from "rxjs";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataService: DataService) {}

  public get account$(): Observable<IData[]> {
    return this.dataService.entities$.asObservable();
  }

}
