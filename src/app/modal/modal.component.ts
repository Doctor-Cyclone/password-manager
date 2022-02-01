import {Component, EventEmitter, Output} from "@angular/core";
import {DataService} from "../services/data.service";
import {IData} from "../models/appInterface";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})

export class ModalComponent {

  public isAccountOpen: boolean = false;
  public isUserNameOpen: boolean = false;
  public isEmailOpen: boolean = false;
  public isPasswordOpen: boolean = false;
  public isPinOpen: boolean = false;

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

  openSelect(event: MouseEvent) {
    console.log(event);
  }
}
