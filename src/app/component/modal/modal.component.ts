import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private showValue;

  @Input()
  public items: Array<any> = [];

  @Output()
  public selectedItem = new EventEmitter();

  @Input()
  get show() {
    return this.showValue;
  }

  @Output() showChange = new EventEmitter();
  set show(val) {
    this.showValue = val;
    this.showChange.emit(this.showValue);
  }

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.show = false;
  }

  selectEvent($event) {
    this.selectedItem.emit($event);
  }

}
