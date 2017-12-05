import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
  ],
  declarations: [TodoComponent, TodoListComponent],
  providers: [
    TodoService,
  ],
})
export class TodoModule { }
