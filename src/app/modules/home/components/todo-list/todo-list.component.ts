import { Component, OnInit } from '@angular/core';
import {TaskList} from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "task 1", checked: true},
    {task: "task 2", checked: false},
    {task: "task 3", checked: true},
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm("Você deseja realmente Deletar tudo?")
    if(confirm) {
      this.taskList = []
    }
 
  }

}
