import { it, describe, expect } from 'angular2/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let tasksService: TasksService;

  beforeEach(() => {
    tasksService = new TasksService();
  });

  it('should have 4 tasks', (done) => {
    expect(tasksService.getTasks().length).toEqual(4);
    done();
  });
});
