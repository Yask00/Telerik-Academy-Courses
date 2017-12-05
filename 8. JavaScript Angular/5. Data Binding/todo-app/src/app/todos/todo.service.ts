import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos = [
    {name: 'buy Milk', dueDate: '11/11/2017'},
    {name: 'call for beer', dueDate: '9/9/2017'},
  ];

  constructor() { }

  getAll() {
    return this.todos;
  }


}
