import { Component, OnInit } from '@angular/core';

interface Item {
  text: string,
  value: any,
  selected: boolean
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public hide = true;
  public items: Array<Item> = [
    {
      text: 'HOMME',
      value: 'h',
      selected: true
    },
    {
      text: 'FEMME',
      value: 'f',
      selected: false
    },
  ];


  constructor() { }

  ngOnInit() {

  }

  public getSelectedItem() {
    return this.items.find((item) => {
      return item.selected;
    });
  }

  public select(object: Item) {
    this.resetSelect();
    object.selected = true;
  }

  public resetSelect() {
    this.items.forEach((item) => {
      item.selected = false;
    });
  }

  public hidder() {
    this.hide = !this.hide;
  }
}
