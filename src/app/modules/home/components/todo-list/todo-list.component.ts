import { Component, DoCheck, OnInit } from '@angular/core';
import {TaskList} from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = []

  constructor() {}
  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

  public validItemTaskList(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("O item está vazio deseja deletar?")
      if(confirm) {
        this.deleteItemTaskList(index)
      }
    }
  }
  

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false})
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
