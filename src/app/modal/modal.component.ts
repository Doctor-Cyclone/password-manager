import {Component, EventEmitter, Output} from "@angular/core";
import {DataService} from "../services/data.service";
import {IData} from "../models/appInterface";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})

export class ModalComponent {
  constructor(private dataService: DataService) {}

  item: IData = {
    account: '',
    userName: '',
    email: '',
    password: '',
    pin: ''
  }

  addItem(newItem: IData) {

    this.dataService.addData(newItem);

    this.item = {
      account: '',
      userName: '',
      email: '',
      password: '',
      pin: ''
    }
  }
}
