import { Injectable } from 'angular2/core';
import { Task } from './task';
import * as _ from 'lodash';

@Injectable()
export class TasksService {

  SAMPLE_TASKS: Task[] = [
    new Task({ id: '123-abc', name: 'Make Quality Jam Great Again' }),
    new Task({ id: '456-def', name: 'Yuuuuuuuuge' }),
    new Task({ id: '789-ghi', name: 'Our email server is secure' }),
    new Task({ id: '101-jkl', name: 'Watch more South Park' })
  ];
 
  getTasks(): Task[] {
    return this.SAMPLE_TASKS;
  }
}
