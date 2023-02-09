import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  features: any[] = [
    { id: 1, name: "Add Income", icon: "add-circle", color: "success" },
    { id: 2, name: "Add Expenses", icon: "remove-circle", color: "danger" },
    { id: 3, name: "Transfer", icon: "send", color: "warning" },
    { id: 4, name: "Pay", icon: "card", color: "danger" },
  ];

  balance: number = 200000;

  constructor() {}

}
