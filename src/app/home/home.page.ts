import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public features: any[] = [
    { id: 1, name: "Add Income", icon: "add-circle", color: "success" },
    { id: 2, name: "Add Expenses", icon: "remove-circle", color: "danger" },
    { id: 3, name: "Transfer", icon: "send", color: "warning" },
    { id: 4, name: "Pay", icon: "card", color: "danger" },
  ];
  public balance: number = 200000;
  public transactions: any[] = [
    { id: 1, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 2, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 3, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 1, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 2, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 3, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 1, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 2, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 3, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 1, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 2, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
    { id: 3, type: "Add Income", amount: 20000, icon: "add-circle", color: "success", date: "3:00 pm" },
  ];

  constructor() {}
  // add, edit, delete, update transactions
}
