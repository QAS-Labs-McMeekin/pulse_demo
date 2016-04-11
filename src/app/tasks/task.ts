import { Component, Input } from 'angular2/core';

@Component({
  selector: 'task',
  template: `
  <li [ngClass]="{checked: task.checked, private: task.private}">
    <button class="delete" (click)="deleteTask()">&times;</button>

    <input type="checkbox" #cb
      [ngModel]="task.checked"
      (change)="setChecked(cb.checked)"
      class="toggle-checked" />

    <button class="toggle-private" (click)="setAccess()">
      {{task.private ? "Private" : "Public"}}
    </button>

    <span class="text">
      <strong>{{task.username}}</strong>
      {{task.username ? '-' : ''}} {{task.text}}
    </span>
  </li>
  `
})
export class TaskComponent {
  @Input() private task: any;
  
  setChecked(checked) {
    //TODO
  }

  setAccess() {
    //TODO
  }

  deleteTask() {
    //TODO
  }
}
